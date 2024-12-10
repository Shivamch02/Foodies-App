import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
// import { SiGmail } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../utils/constants";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialProfileClass child constructor");
  }

  async componentDidMount() {
    // console.log("SocialProfileClass child componentDidMount");
  }

  componentDidUpdate() {
    // console.log("SocialProfileClass child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("SocialProfileClass child componentWillUnmount");
  }

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="flex justify-center p-4">
        <a
          href={Linkedin_Link}
          title="Follow me on Linkedin"
          className="m-3 p-2 bg-blue-600 text-xl text-white rounded-full"
          target="_blank"
          rel='noopener noreferrer'
        >
          <i>
            <SiLinkedin title="Follow me on Linkedin" />
          </i>
        </a>
        <a href={Twitter_Link} title="Follow me on Twitter" className="m-3 p-2 bg-cyan-500 text-xl text-white rounded-full" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiTwitter title="Follow me on Twitter" />
          </i>
        </a>
        <a href={Github_Link} title="Follow me on Github" className="m-3 p-2 bg-gray-800 text-xl text-white rounded-full" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGithub title="Follow me on Github" />
          </i>
        </a>
        <a href={Email_Link} title="Any Query! Mail me" className="m-3 p-2 bg-red-600 text-xl text-white rounded-full" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGmail title="Any Query! Mail me" />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;