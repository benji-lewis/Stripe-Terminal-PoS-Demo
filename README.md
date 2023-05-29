<a name="readme-top"></a>
<!-- Thanks to Othneil Drew for the README template -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/benjisoft/">
    <img src="https://benjilewis.dev/lib/img/logo/monochrome-white.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Stripe Terminal PoS Demo</h3>

  <p align="center">
    Demonstration of the Stripe Terminal JS SDK
    <br />
    <a href="https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://stripedemo.benjilewis.dev/">View Demo</a>
    ·
    <a href="https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This project is a demonstration of the Stripe Terminal JS SDK. It is a simple PoS system that allows you to add items to a cart, and then process the payment using the Stripe Terminal JS SDK. It is built using Node.js and Express.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project requires two components to work correctly. A **local** server, on the same network as the BBPOS WisePOS E and a public server with access to make POST requests to the local server. 

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://stripe.com](https://stripe.com)
2. Optionally, purchase a BBPOS WisePOS E from [https://dashboard.stripe.com/terminal/shop/](https://dashboard.stripe.com/terminal/shop/thsku_J2Qtkrh7X6iusM)
2. Clone the repo
   ```sh
   git clone https://github.com/benjisoft/Stripe-Terminal-PoS-Demo.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy .env.example to .env and fill in your Stripe secret key
   ```env
   STRIPE_SECRET = 'ENTER YOUR SECRET KEY';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can easily add additional buttons to the product matrix by adding the following HTML within the `main` div in `index.html`:

```html
<input type="button" onclick="addProduct('PRODUCT NAME', COST IN PENNIES)" value="DISPLAY NAME">
```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Support for multiple BBPOS WisePOS E devices
- [ ] Storage of multiple transactions
	- [ ] Pre-authorisation of transactions
- [ ] Dynamic product matrix

See the [open issues](https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Benji Lewis - [@benjisoft](https://twitter.com/benjisoft) - benji@benjisoft.org.uk
For paid consulting, contact [VisiMedia](https://visimedia.co.uk)

Project Link: [https://github.com/benjisoft/Stripe-Terminal-PoS-Demo](https://github.com/benjisoft/Stripe-Terminal-PoS-Demo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/benjisoft/Stripe-Terminal-PoS-Demo.svg?style=for-the-badge
[contributors-url]: https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/benjisoft/Stripe-Terminal-PoS-Demo.svg?style=for-the-badge
[forks-url]: https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/network/members
[stars-shield]: https://img.shields.io/github/stars/benjisoft/Stripe-Terminal-PoS-Demo.svg?style=for-the-badge
[stars-url]: https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/benjisoft/Stripe-Terminal-PoS-Demo.svg?style=for-the-badge
[issues-url]: https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/issues
[license-shield]: https://img.shields.io/github/license/benjisoft/Stripe-Terminal-PoS-Demo.svg?style=for-the-badge
[license-url]: https://github.com/benjisoft/Stripe-Terminal-PoS-Demo/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/benji-lewis
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=node.js&logoColor=green
[Node-url]: https://nodejs.org/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/