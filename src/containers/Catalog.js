import React from "react";
import Header from "../components/Header";
import Card from "./Card";
import Badge from "../components/Badge";
import courses from "../courses";
import fetchAuthorData from "../fetchAuthorData";

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      badgeData: [],
      cardObjects: [],
      filteredCards: [],
      tag: undefined,
      length: courses.length,
      authors: {}
    };
    fetchAuthorData().then(authors => {
      this.setState({ authors: authors.authors });
    });
  }

  async componentDidMount() {
    let cards = this.getCardObjects(courses);
    let newBadges = this.getCatalogBadgeData(courses);
    let length = courses.length;
    this.setState({ cardObjects: cards, badgeData: newBadges, length });
  }

  getCardObjects = courses => {
    let cardObjects = this.createCard(courses);
    return cardObjects;
  };

  filteredCourse = tag => {
    let result = [];
    let newCourses = [...this.state.courses];

    if (tag !== undefined && tag !== "all") {
      newCourses.filter(course => {
        if (course.tags.includes(tag)) {
          return result.push(course);
        }
      });
      return this.createCard(result);
    } else {
      return this.createCard(this.state.courses);
    }
  };

  createCard = courses => {
    let cardData = courses.map(course => {
      let card = {};
      let author = "";
      if (this.state.authors[course.author_id]) {
        author = this.state.authors[course.author_id].name;
      }

      return (card = {
        id: course.id,
        title: course.title,
        image: course.image,
        author: author
      });
    });
    return cardData;
  };
  handleBadgeClick = tag => this.setState({ tag });

  getBadgeData = courses => {
    let badgeData = [];
    courses.map(course => {
      return course.tags.map(tag => {
        badgeData.push(this.countTags(badgeData, tag));
        badgeData.push(this.countTags(badgeData, "all"));
        badgeData = badgeData.sort();
        return (badgeData = badgeData.filter(tag => tag !== 0));
      });
    });
    return badgeData;
  };

  countTags = (badgeData, tag) => {
    if (!badgeData.includes(tag)) {
      return tag;
    } else {
      return 0;
    }
  };

  getCatalogBadgeData = () => {
    let badgeData = [];
    let newBadgeData = [];
    badgeData = this.getBadgeData(courses);
    newBadgeData = this.createBadge(badgeData);
    return this.countCatalogBadges(courses, newBadgeData);
  };

  createBadge = data => {
    let badges = {};
    let badgeContainer = [];
    data.map((badge, idx) => {
      return badgeContainer.push(
        (badges = {
          id: idx,
          name: badge,
          number: 0
        })
      );
    });
    return badgeContainer;
  };

  countCatalogBadges = (courses, badgeData) => {
    courses.map(course => {
      return badgeData.filter(badge => {
        badge.number += this.countCheck(course.tags, badge.name);
        return badgeData;
      });
    });
    return badgeData;
  };

  countCheck = (tags, name) => {
    if (tags.includes(name)) {
      return 1;
    } else if (name === "all") {
      return 1;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Badge
          badges={this.state.badgeData}
          handleBadgeClick={this.handleBadgeClick}
        />
        <Card cards={this.filteredCourse(this.state.tag)} />
      </React.Fragment>
    );
  }
}

export default Catalog;
