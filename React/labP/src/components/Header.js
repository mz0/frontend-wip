import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/mz0",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zhmark",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@zyxmark",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/228117/mz0",
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);
    const headerRef = useRef();

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // scrolling down
        } else {
        setShowHeader(true); // scrolling up
        }

        lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"}
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {
                socials.map((social) =>
                <a href={social.url} key={social.url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
