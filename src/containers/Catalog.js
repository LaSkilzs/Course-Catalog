import React from "react";
import Header from "../components/Header";
import Card from "./Card";
import Badge from "../components/Badge";
import authors from "../authors";
import courses from "../courses";

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
      catalogData: [],
      badgeData: [],
      cardObjects: []
    };
  }

  async componentDidMount() {
    let cards = this.getCardObjects(authors, courses);
    let newBadges = this.getCatalogBadgeData(courses);
    this.setState({ cardObjects: cards, badgeData: newBadges });
  }

  getCardObjects = (authors, courses) => {
    let card = {};
    let cardObjects = courses.map(course => {
      return (card = {
        id: course.id,
        title: course.title,
        image: course.image,
        author: authors[course.author_id].name
      });
    });
    return cardObjects;
  };

  getBadgeData = courses => {
    let badgeData = [];
    courses.map(course => {
      return course.tags.map(tag => {
        badgeData.push(this.countTags(badgeData, tag));
        return (badgeData = badgeData.filter(tag => tag !== 0));
      });
    });
    console.log("getData", badgeData);
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
    } else {
      return 0;
    }
  };

  render() {
    console.log(this.state.badgeData);
    return (
      <React.Fragment>
        <Header />
        <Badge badges={this.state.badgeData} />
        <Card cards={this.state.cardObjects} />
      </React.Fragment>
    );
  }
}

export default Catalog;
