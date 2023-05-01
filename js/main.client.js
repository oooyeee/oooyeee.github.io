var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
(function(React2, require$$0) {
  var _chain, _abortSignal, _listeners, _maxListeners, _enableDebugErrorMessages, _throttlePause, _maxQty;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
  const require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
  var hydrateRoot;
  var m = require$$0__default.default;
  {
    m.createRoot;
    hydrateRoot = m.hydrateRoot;
  }
  function Container({ rootElement, children, style: style2, id, className, effectAttachedOnce }) {
    !!effectAttachedOnce && React2.useEffect(effectAttachedOnce, []);
    return React2.createElement(rootElement, { id, style: style2, className }, children);
  }
  function animateHeaderHiding(headerElement, translateY_N_pixels, shouldDisableHidingConditionCb = () => false) {
    let lastScrollPositionY = 0;
    let isHeaderHidden = false;
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > lastScrollPositionY) {
        lastScrollPositionY = window.scrollY;
        console.log("scrolling down");
        if (!isHeaderHidden && !shouldDisableHidingConditionCb()) {
          headerElement.style["transform"] = `translateY(-${translateY_N_pixels}px)`;
          isHeaderHidden = true;
          console.log("header set to hidden");
        }
      } else {
        lastScrollPositionY = window.scrollY;
        console.log("scrolling up");
        if (isHeaderHidden) {
          headerElement.style["transform"] = "translateY(0px)";
          isHeaderHidden = false;
          console.log("header set to visible");
        }
      }
    });
  }
  let projects = [];
  function addProject(projectDetails) {
    projects.push(projectDetails);
  }
  function addDummyProject() {
    addProject({
      name: "Project D",
      description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim.",
      tech: "",
      urls: {
        image: "/assets/imgs/proj1.png",
        live: "http://localhost:9999",
        source: "https://oooyeee.github.io"
      }
    });
  }
  addProject({
    name: "My website",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Hello",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 2",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. World",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 3",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Filter",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 4",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Filter",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 5",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Filter",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 6",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Filter",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 7",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. Filter",
    tech: "html css javascript",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 8",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim. filter",
    tech: "",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addProject({
    name: "Project 9",
    description: "This is a first project entry of my projects catalog. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus faucibus, ullamcorper libero sit amet, lobortis ex. Vivamus fringilla ullamcorper nisl, nec viverra mi dignissim vel. Vivamus dictum enim.",
    tech: "",
    urls: {
      image: "/assets/imgs/proj1.png",
      live: "http://localhost:9999",
      source: "https://oooyeee.github.io"
    }
  });
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  addDummyProject();
  function addProjects(hydration2) {
    hydration2.projectCatalog = projects;
  }
  const appRoot = "app-root";
  const backgroundRoot = "background-root";
  const ssr_json = "SSR_JSON";
  const uiState = {
    checkboxesIDs: {
      language: "checkbox--lang",
      navigation: "checkbox--nav",
      animationVisibility: "checkbox--animation-switch",
      fireworks: "checkbox--fireworks-switch",
      filter: "checkbox--filter"
    }
  };
  function getDate() {
    let date = new Date();
    return date.getUTCFullYear() + "/" + date.getUTCMonth() + "/" + date.getDate();
  }
  let hydration = {
    title: "yaro.pt",
    buildDate: getDate()
  };
  addProjects(hydration);
  const header = "Ge450533c";
  const headerWrapper = "G8acce670";
  const styles$2 = {
    header,
    headerWrapper
  };
  const closeHeaderMenus = "G75336817";
  const style$e = {
    closeHeaderMenus
  };
  function CloseHeaderMenus() {
    const onClickHandler = (ev) => {
      document.getElementById(uiState.checkboxesIDs.navigation).checked = false;
      document.getElementById(uiState.checkboxesIDs.language).checked = false;
    };
    return /* @__PURE__ */ React__default.default.createElement("label", { onClick: onClickHandler, className: style$e.closeHeaderMenus });
  }
  function Header(containerProps) {
    let stopHeaderHidingOnScrollCondition;
    if (typeof window !== "undefined") {
      let checkboxes = {
        language: document.getElementById(uiState.checkboxesIDs.language),
        navigation: document.getElementById(uiState.checkboxesIDs.navigation)
      };
      stopHeaderHidingOnScrollCondition = () => {
        return checkboxes.language.checked || checkboxes.navigation.checked;
      };
    } else {
      stopHeaderHidingOnScrollCondition = () => false;
    }
    return /* @__PURE__ */ React__default.default.createElement("header", { className: styles$2.headerWrapper }, Container({
      ...containerProps,
      ...{
        rootElement: "div",
        className: (containerProps.className ? containerProps.className + " " : "") + styles$2.header,
        effectAttachedOnce: () => {
          let header2 = document.querySelector(`.${styles$2.header}`);
          console.log("attached to header." + styles$2.header);
          animateHeaderHiding(header2, 44, stopHeaderHidingOnScrollCondition);
        }
      }
    }), /* @__PURE__ */ React__default.default.createElement(CloseHeaderMenus, null));
  }
  const footer = "G7d1cd0a2";
  const styles$1 = {
    footer
  };
  function Footer(containerProps) {
    return Container({ ...containerProps, ...{ rootElement: "footer", className: (containerProps.className ? containerProps.className + " " : "") + styles$1.footer } });
  }
  const languageMenu = "G8e8a448d";
  const style$d = {
    languageMenu
  };
  const checkBoxId = "checkbox--lang";
  function LanguageMenu() {
    return /* @__PURE__ */ React__default.default.createElement("div", { className: style$d.languageMenu }, /* @__PURE__ */ React__default.default.createElement("label", { htmlFor: checkBoxId }, /* @__PURE__ */ React__default.default.createElement("span", null, "EN"), /* @__PURE__ */ React__default.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10", style: { stroke: "white", strokeWidth: 1, strokeLinecap: "round" } }, /* @__PURE__ */ React__default.default.createElement("path", { d: "M 2,5 L 5,7" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,5 L 5,7" }))), /* @__PURE__ */ React__default.default.createElement("ul", { className: "languageList" }, /* @__PURE__ */ React__default.default.createElement("li", null, "russian"), /* @__PURE__ */ React__default.default.createElement("li", null, "english"), /* @__PURE__ */ React__default.default.createElement("li", null, "portuguese")));
  }
  const buttonsMenu = "G0f2d5702";
  const animationSwitch = "G316d71b1";
  const fireworksSwitch = "G957960d8";
  const style$c = {
    buttonsMenu,
    animationSwitch,
    fireworksSwitch
  };
  function ButtonsMenu() {
    return /* @__PURE__ */ React__default.default.createElement("div", { className: style$c.buttonsMenu }, /* @__PURE__ */ React__default.default.createElement("label", { id: style$c.animationSwitch, htmlFor: "checkbox--animation-switch" }, /* @__PURE__ */ React__default.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" }, /* @__PURE__ */ React__default.default.createElement("path", { d: "M 12.5,50 L 37.5,37.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 37.5,37.5 L 50,12.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 50,12.5 L 62.5,37.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 62.5,37.5 L 87.5,50" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 87.5,50 L 62.5,62.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 62.5,62.5 L 50,87.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 50,87.5 L 37.5,62.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 37.5,62.5 L 12.5,50" }))), /* @__PURE__ */ React__default.default.createElement("label", { id: style$c.fireworksSwitch, htmlFor: "checkbox--fireworks-switch" }, /* @__PURE__ */ React__default.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" }, /* @__PURE__ */ React__default.default.createElement("path", { d: "M 56,56 L 90,90" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 45,8 L 45,30" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,45 L 30,45" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 60,45 L 82,45" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 45,60 L 45,82" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 34,34 L 18,18" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 56,34 L 72,18" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 34,56 L 18,72" }))));
  }
  const navigationMenu = "G9ef332c7";
  const navigationBurger = "G4153f95d";
  const style$b = {
    navigationMenu,
    navigationBurger
  };
  function NavigationMenu() {
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("nav", { className: style$b.navigationMenu }, /* @__PURE__ */ React__default.default.createElement("a", { href: "#projects" }, "projects"), /* @__PURE__ */ React__default.default.createElement("a", { href: "#about" }, "about"), /* @__PURE__ */ React__default.default.createElement("a", { href: "#contacts" }, "contacts")), /* @__PURE__ */ React__default.default.createElement("label", { htmlFor: "checkbox--nav", id: style$b.navigationBurger }, /* @__PURE__ */ React__default.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", style: { stroke: "white", strokeWidth: 5, strokeLinecap: "round" } }, /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,17.5 L 92,17.5" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,50 L 92,50" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,82.5 L 92,82.5" }))));
  }
  const goToTopButton = "G56ecb721";
  const style$a = {
    goToTopButton
  };
  function GoToTopButton() {
    React2.useEffect(() => {
      const thisButton = document.querySelector(`.${style$a.goToTopButton}`);
      let addedHiddenClass = false;
      const intersectionCb = (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(":: more than 40% is visible ::");
            addedHiddenClass && thisButton.classList.remove(`${style$a.goToTopButton}__hidden`);
          } else {
            console.log(":: LESS than 40% is visible  ::");
            thisButton.classList.add(`${style$a.goToTopButton}__hidden`);
            addedHiddenClass = true;
          }
        });
      };
      const observerOptions = {
        root: null,
        threshold: 0.4
      };
      let observer = new IntersectionObserver(intersectionCb, observerOptions);
      let target = document.getElementById("businessCard");
      observer.observe(target);
    }, []);
    return /* @__PURE__ */ React__default.default.createElement("a", { href: "#businessCard", className: style$a.goToTopButton, "aria-label": "go to top button" }, /* @__PURE__ */ React__default.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10" }, /* @__PURE__ */ React__default.default.createElement("path", { d: "M 2,6 L 5,3" }), /* @__PURE__ */ React__default.default.createElement("path", { d: "M 8,6 L 5,3" })));
  }
  const defaultLayout = "Ga98712b6";
  const styles = {
    defaultLayout
  };
  const about = "G8b6c5c05";
  const terminal = "G74237ccc";
  const terminalHeader = "G18f28b34";
  const terminalTitle = "Gcb9d3104";
  const terminalButtons = "G254303ed";
  const style$9 = {
    about,
    terminal,
    terminalHeader,
    terminalTitle,
    terminalButtons
  };
  function delay(ms, fn = () => {
  }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fn());
      }, ms);
    });
  }
  async function AnimateText(element, animationOptions) {
    var _a;
    let defaultOptions = {
      newText: void 0,
      times: 1e3,
      pauseBefore: 500,
      pauseAfter: 1500,
      typeDelay: 100,
      addBeam: false,
      beamAsPseudo: void 0,
      keepBeamAfterAnimation: false,
      decrementally: void 0,
      abortSignal: new AbortController().signal,
      onBeforeAnimationStart: void 0,
      onBeforeAnimationEnd: void 0,
      onAnimationEndTransformElement: void 0,
      callBack: void 0
    };
    let options = { ...defaultOptions, ...animationOptions };
    let beam;
    let beamAnimation = null;
    if (options.addBeam) {
      if (!options.beamAsPseudo) {
        element.style.position = "relative";
        beam = document.createElement("span");
        beam.style.position = "absolute";
        beam.style.fontWeight = "300";
        beam.innerText = "|";
        beam.style.color = "white";
        beam.style.width = "0px";
        beamAnimation = beam.animate([
          { opacity: "0" },
          { opacity: "1", offset: 0.4 },
          { opacity: "1", offset: 0.6 },
          { opacity: "0", offset: 1 }
        ], {
          direction: "normal",
          duration: 1250,
          iterations: Infinity,
          easing: "linear"
        });
        element.parentNode.insertBefore(beam, element.nextSibling);
        beam.removeAnimation = () => {
          beamAnimation.pause();
          beamAnimation.cancel();
          beam.remove();
        };
      } else {
        const styleId = "__animateText__";
        const beamClassName = "__animateText__adds-beam-after";
        if (!document.querySelector("style#" + styleId)) {
          let style2 = document.createElement("style");
          style2.id = styleId;
          let css = [
            `@keyframes ${styleId}animateBeam{`,
            `0% {opacity: 0}`,
            `40% {opacity: 1}`,
            `60% {opacity: 1}`,
            `100% {opacity: 0}`,
            `}`,
            `.${beamClassName}::after{`,
            `content: "|";`,
            `color: #fff;`,
            `font-weight: 300;`,
            `animation: ${styleId}animateBeam 1.25s linear forwards infinite;`,
            `}`
          ].join("");
          style2.innerHTML = css;
          document.head.appendChild(style2);
        }
        element.classList.add(beamClassName);
        beam = {};
        beam.removeAnimation = () => {
          element.classList.remove(beamClassName);
        };
      }
    }
    let datatext = (_a = element.dataset["text"]) != null ? _a : null;
    let texts = datatext ? datatext.split(";") : null;
    let currentText = element.innerText || null;
    texts = currentText ? texts ? texts.includes(currentText) ? (() => {
      texts.splice(texts.indexOf(currentText), 1);
      return [currentText, ...texts];
    })() : [currentText, ...texts] : [currentText] : texts;
    if (!texts) {
      if (!options.newText) {
        return;
      } else {
        texts = [options.newText];
      }
    }
    let isDecrementing = options.decrementally !== void 0 ? options.decrementally : currentText ? true : false;
    currentText = texts[0];
    let tdelay = options.typeDelay;
    let currentTextIndex = 0;
    if (options.onBeforeAnimationStart !== void 0) {
      options.onBeforeAnimationStart(element);
    }
    if (typeof options.times === "number" && options.times >= 0) {
      const iteration = async () => {
        if (isDecrementing) {
          for (let i = currentText.length; !options.abortSignal.aborted && i >= 0; i--) {
            await delay(tdelay, () => {
              element.innerText = currentText.slice(0, i);
            });
          }
          await delay(options.pauseBefore);
          isDecrementing = false;
          if (currentTextIndex < texts.length - 1) {
            currentTextIndex++;
          } else {
            currentTextIndex = 0;
          }
          currentText = texts[currentTextIndex];
        } else {
          for (let i = 0; !options.abortSignal.aborted && i <= currentText.length; i++) {
            await delay(tdelay, () => {
              element.innerText = currentText.slice(0, i);
            });
          }
          await delay(options.pauseAfter);
          isDecrementing = true;
        }
      };
      if (options.times === Infinity) {
        while (true) {
          await iteration();
        }
      } else {
        for (let i = options.times; i > 0; i--) {
          await iteration();
        }
      }
      if (options.onBeforeAnimationEnd !== void 0) {
        options.onBeforeAnimationEnd(element);
      }
      if (!options.keepBeamAfterAnimation && options.addBeam) {
        beam.removeAnimation();
      }
      if (options.onAnimationEndTransformElement !== void 0) {
        options.onAnimationEndTransformElement(element);
      }
      if (options.callBack !== void 0) {
        options.callBack(element);
      }
    }
  }
  class Chainer {
    constructor(abortSignal = null) {
      __privateAdd(this, _chain, void 0);
      __privateAdd(this, _abortSignal, void 0);
      __publicField(this, "isRunning");
      __privateSet(this, _chain, []);
      __privateSet(this, _abortSignal, abortSignal);
      this.isRunning = false;
    }
    chain(fn, ...params) {
      __privateGet(this, _chain).push({
        fn,
        params: params != null ? params : [void 0]
      });
      return this;
    }
    async go() {
      var _a;
      this.isRunning = true;
      for (let { fn, params } of __privateGet(this, _chain)) {
        !((_a = __privateGet(this, _abortSignal)) == null ? void 0 : _a.aborted) && await fn(...params);
      }
      this.isRunning = false;
    }
  }
  _chain = new WeakMap();
  _abortSignal = new WeakMap();
  const terminalConsole = "G105a8482";
  const terminalConsoleContainerId = "Gc25be756";
  const textLine = "G0c94bc81";
  const myname = "G17bcab16";
  const aibot = "G1a973ca4";
  const style$8 = {
    terminalConsole,
    terminalConsoleContainerId,
    textLine,
    myname,
    aibot
  };
  const autogrowingTextArea = "G9cb7a5df";
  const autogrowingTextAreaParentNode = "G1083ef61";
  const labelStyle = {
    autogrowingTextArea,
    autogrowingTextAreaParentNode
  };
  function AutogrowingTextArea({ name = "", placeholder = "", ee = null, textareaRef }) {
    const caretPosition = React2.useRef(null);
    const handleOnBlur = (ev) => {
      caretPosition.current = window.getSelection().getRangeAt(0);
    };
    React2.useEffect(() => {
      let el = textareaRef.current;
      ee.on("focus", () => {
        if (document.activeElement !== el) {
          el.focus({
            preventScroll: false
          });
          if (caretPosition.current) {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(caretPosition.current);
          }
        }
      });
    }, []);
    const handleKeyDown = (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        !!ee && ee.emit("textAreaEnterPressed");
      } else if (ev.ctrlKey && ev.key === "c") {
        console.log(" ctrl + c in Paragraph AREA");
        !!ee && ee.emit("textAreaInterruptSignal");
      }
    };
    return /* @__PURE__ */ React__default.default.createElement(
      "p",
      {
        className: labelStyle.autogrowingTextArea,
        id: labelStyle.autogrowingTextArea + "-id",
        tabIndex: -1,
        contentEditable: true,
        ref: textareaRef,
        onKeyDown: handleKeyDown,
        onBlur: handleOnBlur
      }
    );
  }
  class EE {
    constructor(options) {
      __privateAdd(this, _listeners, void 0);
      __privateAdd(this, _maxListeners, void 0);
      __privateAdd(this, _enableDebugErrorMessages, void 0);
      __publicField(this, "on", this.addListener);
      __publicField(this, "off", this.removeListener);
      var _a;
      __privateSet(this, _listeners, {});
      __privateSet(this, _maxListeners, (options == null ? void 0 : options.maxListeners) ? (options == null ? void 0 : options.maxListeners) > 0 ? options == null ? void 0 : options.maxListeners : Infinity : Infinity);
      __privateSet(this, _enableDebugErrorMessages, (_a = options == null ? void 0 : options.enableDebugErrorMessages) != null ? _a : false);
    }
    addListener(target, listener, options) {
      if (__privateGet(this, _listeners)[target] !== void 0 && __privateGet(this, _listeners)[target].length < __privateGet(this, _maxListeners)) {
        __privateGet(this, _listeners)[target].push({
          fn: listener,
          once: (options == null ? void 0 : options.once) ? options == null ? void 0 : options.once : false
        });
      } else {
        __privateGet(this, _listeners)[target] = [{
          fn: listener,
          once: (options == null ? void 0 : options.once) ? options == null ? void 0 : options.once : false
        }];
      }
      return this;
    }
    removeListener(target, listener) {
      if (__privateGet(this, _listeners)[target] !== void 0) {
        if (listener === void 0) {
          __privateGet(this, _listeners)[target].pop();
        } else {
          let indexToBeRemoved = __privateGet(this, _listeners)[target].findIndex((item) => item.fn.name === listener.name);
          if (-1 !== indexToBeRemoved) {
            __privateGet(this, _listeners)[target].splice(indexToBeRemoved, 1);
          }
        }
      }
      return this;
    }
    removeAllListeners(target) {
      if (__privateGet(this, _listeners)[target] !== void 0) {
        delete __privateGet(this, _listeners)[target];
      }
      return this;
    }
    once(target, listener) {
      this.addListener(target, listener, { once: true });
      return this;
    }
    emit(target, ...params) {
      if (__privateGet(this, _listeners)[target] !== void 0) {
        for (let i = 0; i < __privateGet(this, _listeners)[target].length; i++) {
          try {
            if (__privateGet(this, _listeners)[target][i].once) {
              let ref = __privateGet(this, _listeners)[target][i].fn;
              __privateGet(this, _listeners)[target].splice(i, 1);
              i = i - 1;
              ref(params);
            } else {
              __privateGet(this, _listeners)[target][i].fn(params);
            }
          } catch (err) {
            if (__privateGet(this, _enableDebugErrorMessages)) {
              console.error(err);
            }
          }
        }
      }
      return this;
    }
  }
  _listeners = new WeakMap();
  _maxListeners = new WeakMap();
  _enableDebugErrorMessages = new WeakMap();
  const aboutText = [
    "  Hi there, my name is Yaroslav. If you are reading this and don't see",
    `a "blue screen of death" - that means i'm certainly have a good`,
    `understanding of programming concepts. I possess broad practical skills in`,
    `Typescript, C#, SQL, Responsive Design, Automation, DevOps, Networking`,
    `and other scary words, but particularly enjoy developing software for the web.`,
    `If you are as enthusiastic about technology as i am, lets get in touch!`,
    "Btw, try other commands, type: help"
  ];
  let files = {
    "about.txt": aboutText,
    "dummy.txt": ["this is a dummy file 1"],
    "dummy2.txt": ["this is a dummy file 2"]
  };
  function getCommandOptions(args) {
    let argstr = trimLeft(args).trimEnd();
    return argstr.split(" ");
  }
  let commands = {
    "clear": (args) => {
      return null;
    },
    "about": (args) => {
      return [aboutText.join(" ")];
    },
    "ls": (args) => {
      return Object.keys(files);
    },
    "cat": (args) => {
      let argsOptions = getCommandOptions(args);
      let addLineNumbers = false;
      let onlyPrintHelp = false;
      let thisOptions = {
        "--help": {
          description: [
            `usage: cat [...options] file1 file2 ... fileN`,
            `  options:`,
            `  --help:    print this help`,
            `  --number:  show line numbers`
          ],
          fn: () => {
            onlyPrintHelp = true;
          }
        },
        "--number": {
          description: null,
          fn: () => {
            addLineNumbers = true;
          }
        }
      };
      let fileNames = [];
      for (let opt of argsOptions) {
        let hasOpt = thisOptions[opt];
        if (hasOpt) {
          thisOptions[opt].fn();
        } else {
          if (opt in files) {
            fileNames.push(opt);
          } else {
            return ["unknown file: " + opt];
          }
        }
      }
      if (onlyPrintHelp) {
        return thisOptions["--help"].description;
      }
      let outputs = [];
      for (let fileName of fileNames) {
        if (fileNames.length > 1) {
          outputs.push("file: " + fileName);
        }
        let fileContent = null;
        if (addLineNumbers) {
          fileContent = files[fileName].map((line, index) => `${index + 1}: ` + line);
          for (let fileLine of fileContent) {
            outputs.push(fileLine);
          }
        } else {
          fileContent = files[fileName];
          outputs.push(fileContent.join(" "));
        }
      }
      return outputs;
    }
  };
  const helpText = (() => {
    let keys = Object.keys(commands);
    let maxLen = keys.reduce((prev, curr) => {
      return curr.length > prev ? curr.length : prev;
    }, 0) + 3;
    return keys.map((key) => {
      return "  " + key.padEnd(maxLen, ".");
    });
  })();
  commands["help"] = (args) => {
    let lines = ["available commands:"];
    lines = [...lines, ...helpText];
    lines.push("to read command manual, type: command --help");
    return lines;
  };
  commands[""] = (args) => {
    return [""];
  };
  function trimLeft(str) {
    return str.trimStart();
  }
  function firstWord(str) {
    return str.replace(/ .*/, "");
  }
  function processCommand(commandString) {
    let commandStripped = trimLeft(commandString);
    let cmd = firstWord(commandStripped);
    let args = commandStripped.replace(/^(\S+)\s*/, "");
    let result = commands[cmd];
    if (!result) {
      return ["unprocessable command: " + commandString];
    }
    console.log(" internal result");
    console.log(result(args));
    return result(args);
  }
  function TerminalConsole() {
    let ee = new EE();
    let pRef = React2.useRef(null);
    let abortRef = React2.useRef(new AbortController());
    let isTextSelecting = React2.useRef(false);
    let textSelection = React2.useRef(null);
    let chainer = React2.useRef(new Chainer(abortRef.current.signal));
    const emitFocus = () => {
      if (chainer.current.isRunning) {
        ee.emit("focusLabel");
      } else {
        ee.emit("focus");
      }
    };
    const handleOnLabelClick = (ev) => {
      checkSelection();
    };
    const checkSelection = () => {
      let currentText = window.getSelection().toString();
      if (currentText.length > 0) {
        console.log(">>> on selection  >> IS SELECTED");
        isTextSelecting.current = true;
        textSelection.current = currentText;
      } else {
        console.log(">>> on selection  >> IS NOT SELECTED");
        isTextSelecting.current = false;
        emitFocus();
      }
    };
    const handleKeyDown = (ev) => {
      if (ev.ctrlKey && ev.key === "c") {
        ev.preventDefault();
        console.log("ctrl + c in LABEL");
        isTextSelecting.current && navigator.clipboard.writeText(textSelection.current);
        !!ee && ee.emit("textAreaInterruptSignal");
      }
    };
    React2.useEffect(() => {
      let label = document.querySelector(`#${style$8.terminalConsoleContainerId}`);
      let textarea = pRef.current;
      let term = document.querySelector(`.${style$8.terminalConsole}`);
      const enterAndAppendText = (text = void 0, dummyCommand = void 0) => {
        let result = text != null ? text : processCommand(textarea.innerText);
        if (result === null) {
          term.textContent = "";
          textarea.textContent = "";
          window.scrollTo({
            behavior: "smooth",
            top: label.offsetTop
          });
          textarea.focus();
          return;
        }
        if (dummyCommand) {
          result.unshift(dummyCommand);
        } else {
          result.unshift(textarea.innerText);
        }
        let lines = result.length;
        textarea.textContent = "";
        chainer.current = new Chainer(abortRef.current.signal);
        chainer.current.chain(() => {
          textarea.style.visibility = "hidden";
        });
        for (let i = 0; i < lines; i++) {
          let line = result[i];
          let p = document.createElement("p");
          if (i > 0) {
            p.classList.add(style$8.terminalConsole + "_multiline");
          } else {
            chainer.current.chain(async () => {
              p.innerText = line;
              term.appendChild(p);
            });
            continue;
          }
          p.dataset["text"] = line;
          chainer.current.chain(AnimateText, p, {
            onBeforeAnimationStart: () => {
              term.appendChild(p);
            },
            abortSignal: abortRef.current.signal,
            times: 1,
            pauseBefore: 0,
            typeDelay: 1,
            pauseAfter: 0,
            addBeam: false
          });
        }
        chainer.current.go().then(() => {
          abortRef.current = new AbortController();
          chainer.current = new Chainer(abortRef.current.signal);
          textarea.style.visibility = "visible";
          textarea.focus();
        });
      };
      ee.on("textAreaEnterPressed", () => {
        console.log(" trigger ");
        label.focus();
        try {
          enterAndAppendText();
        } catch (err) {
          console.log(err);
        }
      });
      ee.on("textAreaInterruptSignal", () => {
        console.log(":: caught ctrl + c ::");
        if (chainer.current.isRunning) {
          abortRef.current.abort();
          console.log("hos iw abort signal: " + abortRef.current.signal.aborted);
        }
      });
      ee.on("focusLabel", () => {
        console.log("while chainer is runnig, i focus label");
        label.focus();
      });
      const intersectionCb = (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            enterAndAppendText([aboutText.join(" ")], `cat ./about.txt`);
            observer2.unobserve(label);
          }
        });
      };
      const observerOptions = {
        root: null,
        threshold: 0.15
      };
      let observer = new IntersectionObserver(intersectionCb, observerOptions);
      observer.observe(label);
    }, []);
    return /* @__PURE__ */ React__default.default.createElement(
      "label",
      {
        htmlFor: labelStyle.autogrowingTextArea + "-id",
        onClick: handleOnLabelClick,
        tabIndex: -1,
        onKeyDown: handleKeyDown,
        id: style$8.terminalConsoleContainerId,
        className: "WTF"
      },
      /* @__PURE__ */ React__default.default.createElement("div", { className: style$8.terminalConsole }),
      /* @__PURE__ */ React__default.default.createElement("div", { className: labelStyle.autogrowingTextAreaParentNode }, /* @__PURE__ */ React__default.default.createElement(AutogrowingTextArea, { ee, textareaRef: pRef }))
    );
  }
  function About({ id }) {
    return /* @__PURE__ */ React__default.default.createElement("section", { id: id != null ? id : "about", className: style$9.about }, /* @__PURE__ */ React__default.default.createElement("h3", null, "About me"), /* @__PURE__ */ React__default.default.createElement("div", { className: style$9.terminal }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$9.terminalHeader }, /* @__PURE__ */ React__default.default.createElement("span", { className: style$9.terminalTitle }, "/home/users/yaroslav"), /* @__PURE__ */ React__default.default.createElement("ul", { className: style$9.terminalButtons }, /* @__PURE__ */ React__default.default.createElement("li", null, "_"), /* @__PURE__ */ React__default.default.createElement("li", null, "\u25A1"), /* @__PURE__ */ React__default.default.createElement("li", null, "x"))), /* @__PURE__ */ React__default.default.createElement(TerminalConsole, null)));
  }
  const contacts = "Gbf0b6696";
  const contactLinks = "Gcda970a8";
  const messageForm = "Gfb423ab1";
  const style$7 = {
    contacts,
    contactLinks,
    messageForm
  };
  function Contacts({ id }) {
    let react_duct_taped_textArea = [
      "<span>Message:</span>",
      `<textarea name="message" placeholder="What's up!" oninput="this.parentNode.dataset.replicatedValue = this.value"></textarea>`
    ].join("");
    return /* @__PURE__ */ React__default.default.createElement("section", { id: id != null ? id : "contacts", className: style$7.contacts }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$7.contacts + "__wrapper" }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$7.contactLinks }, /* @__PURE__ */ React__default.default.createElement("h3", null, "contact info"), /* @__PURE__ */ React__default.default.createElement("ul", null, /* @__PURE__ */ React__default.default.createElement("li", null, /* @__PURE__ */ React__default.default.createElement("a", { href: "mailto:iam.yaroslav@gmail.com", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("title", null, "send me an email"), /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#envelope" })), /* @__PURE__ */ React__default.default.createElement("span", null, "iam.yaroslav@gmail.com"))), /* @__PURE__ */ React__default.default.createElement("li", null, /* @__PURE__ */ React__default.default.createElement("a", { href: "https://www.linkedin.com/in/yaroslavminakov", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("title", null, "my Linkedin"), /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#linkedin" })), /* @__PURE__ */ React__default.default.createElement("span", null, "linkedin"))), /* @__PURE__ */ React__default.default.createElement("li", null, /* @__PURE__ */ React__default.default.createElement("a", { href: "https://wa.me/+351914059971/?text=Hello%20Yaroslav!", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("title", null, "chat with me on WhatsApp"), /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#whatsApp_bubble" })), /* @__PURE__ */ React__default.default.createElement("span", null, "whatsapp"))), /* @__PURE__ */ React__default.default.createElement("li", null, /* @__PURE__ */ React__default.default.createElement("a", { href: "https://discord.gg/bhQnscdXZT", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("title", null, "PM me on discord"), /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#discord" })), /* @__PURE__ */ React__default.default.createElement("span", null, "Discord"))), /* @__PURE__ */ React__default.default.createElement("li", null, /* @__PURE__ */ React__default.default.createElement("a", { href: "https://github.com/oooyeee", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("title", null, "check my github"), /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#github" })), /* @__PURE__ */ React__default.default.createElement("span", null, "github"))))), /* @__PURE__ */ React__default.default.createElement("div", { className: style$7.messageForm }, /* @__PURE__ */ React__default.default.createElement("h3", null, "Hi, lets talk!"), /* @__PURE__ */ React__default.default.createElement("form", { action: "", className: style$7.messageForm + "__form" }, /* @__PURE__ */ React__default.default.createElement("label", { className: style$7.messageForm + "__label-name" }, /* @__PURE__ */ React__default.default.createElement("span", null, "Name:"), /* @__PURE__ */ React__default.default.createElement("input", { type: "text", name: "name", placeholder: "Your name" })), /* @__PURE__ */ React__default.default.createElement("label", { className: style$7.messageForm + "__label-email" }, /* @__PURE__ */ React__default.default.createElement("span", null, "Email:"), /* @__PURE__ */ React__default.default.createElement("input", { type: "text", name: "email", placeholder: "you@example.com" })), /* @__PURE__ */ React__default.default.createElement("label", { className: style$7.messageForm + "__label-message", dangerouslySetInnerHTML: { __html: react_duct_taped_textArea } }), /* @__PURE__ */ React__default.default.createElement("input", { type: "submit", className: style$7.messageForm + "__submit" })))));
  }
  const footCopyright = "G934c488d";
  const style$6 = {
    footCopyright
  };
  const P2 = () => {
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("p", null, "Never gonna give you up, never gonna let you down, never gonna run around and desert you ", /* @__PURE__ */ React__default.default.createElement("b", { style: { color: "red", textShadow: "0px 0px 2px black" } }, "\u2764")), /* @__PURE__ */ React__default.default.createElement("p", null, "\xA9 2023 Yaroslav Minakov"));
  };
  function FootCopyright() {
    return /* @__PURE__ */ React__default.default.createElement("section", { className: style$6.footCopyright }, /* @__PURE__ */ React__default.default.createElement(P2, null));
  }
  function DefaultLayout({ children }) {
    React2.useRef(false);
    return /* @__PURE__ */ React__default.default.createElement("div", { className: `wrapper ${styles.defaultLayout}` }, /* @__PURE__ */ React__default.default.createElement(Header, { id: "header-container" }, /* @__PURE__ */ React__default.default.createElement(LanguageMenu, null), /* @__PURE__ */ React__default.default.createElement(ButtonsMenu, null), /* @__PURE__ */ React__default.default.createElement(NavigationMenu, null)), /* @__PURE__ */ React__default.default.createElement("main", null, children), /* @__PURE__ */ React__default.default.createElement(Footer, { id: "footer-container" }, /* @__PURE__ */ React__default.default.createElement(About, null), /* @__PURE__ */ React__default.default.createElement(Contacts, null), /* @__PURE__ */ React__default.default.createElement(FootCopyright, null)), /* @__PURE__ */ React__default.default.createElement(GoToTopButton, null));
  }
  class Throttler {
    constructor(quantity = Infinity) {
      __privateAdd(this, _throttlePause, false);
      __privateAdd(this, _maxQty, void 0);
      __privateSet(this, _maxQty, quantity);
    }
    throttle(time, fn = () => {
    }) {
      if (__privateGet(this, _throttlePause))
        return;
      __privateSet(this, _throttlePause, true);
      setTimeout(() => {
        fn();
        __privateSet(this, _throttlePause, false);
      }, time);
    }
    throttleByQty(currentQuantity, fn = () => {
    }) {
      if (currentQuantity > __privateGet(this, _maxQty)) {
        return;
      } else {
        fn();
      }
    }
    throttleByQtyAndTime(time, currentQuantity, fn = () => {
    }) {
      if (__privateGet(this, _throttlePause) || currentQuantity > __privateGet(this, _maxQty))
        return;
      __privateSet(this, _throttlePause, true);
      setTimeout(() => {
        fn();
        __privateSet(this, _throttlePause, false);
      }, time);
    }
  }
  _throttlePause = new WeakMap();
  _maxQty = new WeakMap();
  function canvasAnimation(canvas, checkBoxSwitch = void 0, checkBoxFireworksSwitch = void 0, skip = false) {
    if (skip)
      return;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    console.log(["sizes", width, height, Math.round(Math.sqrt(width * width + height * height))]);
    console.log(["device sizes", window.innerWidth, window.innerHeight]);
    let ctx = canvas.getContext("2d");
    let animationFrame;
    let STOP_ANIMATION = checkBoxSwitch ? checkBoxSwitch.checked ? true : false : false;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInsideDoc = false;
    let lastTimeMoved = Date.now();
    const pi = Math.PI;
    const rad = pi / 180;
    function deg2rad(degree) {
      return degree * rad;
    }
    function cos(degree) {
      return Math.cos(deg2rad(degree));
    }
    function sin(degree) {
      return Math.sin(deg2rad(degree));
    }
    function drawshape(region, fillStyle = "gray", fillRule = "nonzero") {
      ctx.fillStyle = fillStyle;
      ctx.fill(region, fillRule);
    }
    function drawtext(text, fillStyle = "gray") {
      ctx.font = text.font;
      ctx.fillStyle = fillStyle;
      ctx.fillText(text.text, text.x, text.y);
    }
    function p(x, y) {
      return {
        "x": x,
        "y": y
      };
    }
    function crectpath(points, isClosed) {
      let path = new Path2D();
      path.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        path.lineTo(points[i].x, points[i].y);
      }
      if (isClosed) {
        path.closePath();
      }
      return path;
    }
    function createRhombus(diameter, point) {
      return crectpath(
        [
          p(point.x, point.y - diameter / 2),
          p(point.x + diameter / 2, point.y),
          p(point.x, point.y + diameter / 2),
          p(point.x - diameter / 2, point.y)
        ],
        true
      );
    }
    function ctext(text, font = "24px Verdana", p2 = { "x": 0, "y": 0 }) {
      return {
        text,
        font,
        "x": p2.x,
        "y": p2.y
      };
    }
    let frameTime;
    let previousFrameTimeStamp = 0;
    let fps = 0;
    const fpsColor = "#ffffff55";
    let frameTimes = [];
    let fpsPoint;
    let explosions = [];
    const explosions_sizes = [2, 2, 2, 2, 2, 4, 4, 4, 8];
    const explosions_per_move = 30;
    const explosions_idle = 8;
    const explosions_color_options = ["white", "white", "white", "yellow", "lime", "cyan", "cyan", "blue", "crimson", "magenta"];
    const explosions_color_options_total = explosions_color_options.length;
    const colorPicker = () => {
      return explosions_color_options[Math.floor(Math.random() * explosions_color_options_total)];
    };
    let comets = [];
    const qComets = 5;
    const comet_speed = 200;
    const comet_sizes = [1, 1, 2, 2, 4, 4, 4, 9, 9, 12];
    const comet_color = "#50b0ff";
    let small = [];
    let medium = [];
    let big = [];
    const velocity = {
      "x": 10,
      "y": -10
    };
    const dBig = 10;
    const dMedium = 4;
    const dSmall = 2;
    const stars_color = "white";
    let area;
    let qBig;
    let qMedium;
    let qSmall;
    const qBig_options = [6, 10, 14, 16, 20];
    const qMedium_options = [20, 30, 50, 70, 100];
    const qSmall_options = [40, 60, 80, 100, 140];
    function initPoints() {
      fpsPoint = p(width - 100, 64);
      for (let i = 0; i < qComets; i++) {
        let angle = Math.random() * 360;
        let velocity2 = {
          "x": comet_speed * cos(angle),
          "y": comet_speed * sin(angle)
        };
        comets.push({
          "p": p(Math.floor(Math.random() * width), Math.floor(Math.random() * height)),
          "velocity": velocity2,
          "chozenSize": comet_sizes[Math.floor(Math.random() * comet_sizes.length)]
        });
      }
      small = [];
      medium = [];
      big = [];
      area = height * width;
      qBig = area < 2e5 ? qBig_options[0] : area < 4e5 ? qBig_options[1] : area < 12e5 ? qBig_options[2] : area < 21e5 ? qBig_options[3] : qBig_options[4];
      qMedium = area < 2e5 ? qMedium_options[0] : area < 4e5 ? qMedium_options[1] : area < 12e5 ? qMedium_options[2] : area < 21e5 ? qMedium_options[3] : qMedium_options[4];
      qSmall = area < 2e5 ? qSmall_options[0] : area < 4e5 ? qSmall_options[1] : area < 12e5 ? qSmall_options[2] : area < 21e5 ? qSmall_options[3] : qSmall_options[4];
      for (let i = 0; i < qSmall; i++) {
        small.push(p(Math.floor(Math.random() * width), Math.floor(Math.random() * height)));
      }
      for (let i = 0; i < qMedium; i++) {
        medium.push(p(Math.floor(Math.random() * width), Math.floor(Math.random() * height)));
      }
      for (let i = 0; i < qBig; i++) {
        big.push(p(Math.floor(Math.random() * width), Math.floor(Math.random() * height)));
      }
    }
    function moveRombs(points, size) {
      for (let i = 0; i < points.length; i++) {
        drawshape(createRhombus(size, points[i]), stars_color);
        if (points[i].x > width + size / 2) {
          points[i].x = -1 * size / 2;
          points[i].y = Math.floor(Math.random() * height);
        } else if (points[i].y < -1 * size / 2) {
          points[i].y = height + size / 2;
          points[i].x = Math.floor(Math.random() * width);
        } else {
          points[i].x = points[i].x + velocity.x * frameTime;
          points[i].y = points[i].y + velocity.y * frameTime;
        }
      }
    }
    function updateRombs() {
      moveRombs(big, dBig);
      moveRombs(medium, dMedium);
      moveRombs(small, dSmall);
    }
    function updateComets() {
      for (let i = 0; i < qComets; i++) {
        drawshape(createRhombus(comets[i].chozenSize, comets[i].p), comet_color);
        if (comets[i].p.x < 0 - comets[i].chozenSize || comets[i].p.y < 0 - comets[i].chozenSize) {
          comets[i].chozenSize = comet_sizes[Math.floor(Math.random() * comet_sizes.length)];
          comets[i].p = p(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
          let angle = Math.random() * 360;
          comets[i].velocity = {
            "x": comet_speed * cos(angle),
            "y": comet_speed * sin(angle)
          };
        } else if (comets[i].p.x > width + comets[i].chozenSize || comets[i].p.y > height + comets[i].chozenSize) {
          comets[i].chozenSize = comet_sizes[Math.floor(Math.random() * comet_sizes.length)];
          comets[i].p = p(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
          let angle = Math.random() * 360;
          comets[i].velocity = {
            "x": comet_speed * cos(angle),
            "y": comet_speed * sin(angle)
          };
        } else {
          comets[i].p.x = comets[i].p.x + comets[i].velocity.x * frameTime;
          comets[i].p.y = comets[i].p.y + comets[i].velocity.y * frameTime;
        }
      }
    }
    function explosion() {
      for (let i = 0; i < explosions.length; i++) {
        drawshape(createRhombus(explosions[i].size, explosions[i].p), explosions[i].color);
        if (explosions[i].p.x < 0 - explosions[i].size || explosions[i].p.y < 0 - explosions[i].size) {
          explosions.splice(i, 1);
          i--;
        } else if (explosions[i].p.x > width + explosions[i].size || explosions[i].p.y > height + explosions[i].size) {
          explosions.splice(i, 1);
          i--;
        } else {
          explosions[i].p.x = explosions[i].p.x + explosions[i].velocity.x * frameTime;
          explosions[i].p.y = explosions[i].p.y + explosions[i].velocity.y * frameTime;
        }
      }
    }
    function draw() {
      updateRombs();
      updateComets();
      explosion();
    }
    function drawAverageFps(timeBetweenFrames) {
      frameTimes.push(timeBetweenFrames);
      let accurateSumFrameTimes = 0;
      for (let sample of frameTimes) {
        accurateSumFrameTimes = accurateSumFrameTimes + sample;
      }
      if (accurateSumFrameTimes >= 1) {
        fps = Math.round(1 / (accurateSumFrameTimes / frameTimes.length));
        frameTimes = [];
      }
      drawtext(ctext(`FPS: ${fps}`, "16px Verdana", fpsPoint), fpsColor);
    }
    window.addEventListener("resize", function(event) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      ctx = canvas.getContext("2d");
      initPoints();
    });
    let throttler = new Throttler(1e3);
    const addExplosion = (x, y) => {
      let angle = Math.random() * 360;
      explosions.push({
        "p": p(x, y),
        "velocity": {
          "x": comet_speed * cos(angle),
          "y": comet_speed * sin(angle)
        },
        "size": explosions_sizes[Math.floor(Math.random() * explosions_sizes.length)],
        "color": colorPicker()
      });
    };
    const trackMouseCoords = (x, y) => {
      mouseX = x;
      mouseY = y;
    };
    const moveAction = (x, y) => {
      trackMouseCoords(x, y);
      lastTimeMoved = Date.now();
      for (let i = 0; i < explosions_per_move; i++) {
        throttler.throttleByQty(explosions.length, () => {
          addExplosion(x, y);
        });
      }
    };
    const hMouseMove = (event) => {
      moveAction(event.clientX, event.clientY);
    };
    const hTouchMove = (event) => {
      moveAction(
        event.touches.item(0).pageX,
        event.touches.item(0).pageY - window.scrollY
      );
    };
    const hTouchStart = (event) => {
      moveAction(
        event.touches.item(0).pageX,
        event.touches.item(0).pageY
      );
    };
    document.addEventListener("mouseleave", () => {
      isMouseInsideDoc = false;
    });
    document.addEventListener("mouseenter", () => {
      isMouseInsideDoc = true;
    });
    if (checkBoxFireworksSwitch && !checkBoxFireworksSwitch.checked) {
      document.addEventListener("mousemove", hMouseMove);
      document.addEventListener("touchmove", hTouchMove);
      document.addEventListener("touchstart", hTouchStart);
    }
    document.addEventListener("visibilitychange", (event) => {
      if (checkBoxSwitch !== void 0 && checkBoxSwitch.checked) {
        return;
      }
      if (document.visibilityState === "hidden") {
        STOP_ANIMATION = true;
        ctx.clearRect(0, 0, width, height);
        window.cancelAnimationFrame(animationFrame);
      } else if (document.visibilityState === "visible") {
        STOP_ANIMATION = false;
        previousFrameTimeStamp = performance.now();
        initPoints();
        animationFrame = window.requestAnimationFrame(loop);
      }
    });
    setInterval(() => {
      if (document.visibilityState === "visible" && isMouseInsideDoc && Date.now() - lastTimeMoved > 500) {
        for (let i = 0; i < explosions_idle; i++) {
          addExplosion(mouseX, mouseY);
        }
      }
    }, 1e3);
    function loop(frameTimeStamp) {
      if (STOP_ANIMATION) {
        return;
      }
      ctx.clearRect(0, 0, width, height);
      frameTime = (frameTimeStamp - previousFrameTimeStamp) / 1e3;
      previousFrameTimeStamp = frameTimeStamp;
      draw();
      drawAverageFps(frameTime);
      window.requestAnimationFrame(loop);
    }
    initPoints();
    animationFrame = window.requestAnimationFrame(loop);
    if (checkBoxSwitch !== void 0) {
      checkBoxSwitch.addEventListener("change", () => {
        if (checkBoxSwitch.checked) {
          STOP_ANIMATION = true;
          ctx.clearRect(0, 0, width, height);
          window.cancelAnimationFrame(animationFrame);
          document.removeEventListener("mousemove", hMouseMove);
          document.removeEventListener("touchmove", hTouchMove);
          document.removeEventListener("touchstart", hTouchStart);
        } else if (!checkBoxSwitch.checked) {
          STOP_ANIMATION = false;
          previousFrameTimeStamp = performance.now();
          animationFrame = window.requestAnimationFrame(loop);
          if (checkBoxFireworksSwitch !== void 0 && !checkBoxFireworksSwitch.checked) {
            document.addEventListener("mousemove", hMouseMove);
            document.addEventListener("touchmove", hTouchMove);
            document.addEventListener("touchstart", hTouchStart);
          }
        }
      });
    }
    if (checkBoxFireworksSwitch !== void 0) {
      checkBoxFireworksSwitch.addEventListener("change", (event) => {
        if (checkBoxFireworksSwitch.checked) {
          console.log("fireworks off");
          document.removeEventListener("mousemove", hMouseMove);
          document.removeEventListener("touchmove", hTouchMove);
          document.removeEventListener("touchstart", hTouchStart);
        } else if (!checkBoxFireworksSwitch.checked) {
          console.log("fireworks on");
          document.addEventListener("mousemove", hMouseMove);
          document.addEventListener("touchmove", hTouchMove);
          document.addEventListener("touchstart", hTouchStart);
        }
      });
    }
  }
  const fancyCanvas = "Gdf8b066f";
  const style$5 = {
    fancyCanvas
  };
  function FancyCanvas({ play }) {
    let canvasID = "fancyCanvas";
    React2.useEffect(() => {
      let thisCanvas = document.querySelector(`#${canvasID}`);
      console.log("canvas: ", thisCanvas);
      let animationSwitch2 = document.querySelector(`#${uiState.checkboxesIDs.animationVisibility}`);
      let fireworksSwitch2 = document.querySelector(`#${uiState.checkboxesIDs.fireworks}`);
      console.log(animationSwitch2, fireworksSwitch2);
      !!play && canvasAnimation(thisCanvas, animationSwitch2, fireworksSwitch2);
    }, []);
    return /* @__PURE__ */ React__default.default.createElement("canvas", { id: canvasID, className: style$5.fancyCanvas });
  }
  const canvasBackground = "Gb77086c2";
  const style$4 = {
    canvasBackground
  };
  function Background() {
    return /* @__PURE__ */ React__default.default.createElement("div", { id: "canvas-background", className: style$4.canvasBackground }, /* @__PURE__ */ React__default.default.createElement(FancyCanvas, { play: true }));
  }
  const businessCard = "Gec3f0bc6";
  const socialLinks = "G80800ce6";
  const socialButton$1 = "G7b410166";
  const style$3 = {
    businessCard,
    socialLinks,
    socialButton: socialButton$1
  };
  const socialButton = "Gbc7a9021";
  const style$2 = {
    socialButton
  };
  const Title = (title) => /* @__PURE__ */ React__default.default.createElement("title", null, title);
  const Text = (text) => /* @__PURE__ */ React__default.default.createElement("span", null, text);
  function SocialButton({ href, className, rel, linkId, xlinkHref, title, text }) {
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("a", { href, target: "_blank", rel: rel != null ? rel : "", className: className != null ? className : style$2.socialButton, id: linkId != null ? linkId : "" }, /* @__PURE__ */ React__default.default.createElement("svg", null, title ? Title(title) : "", /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref })), text ? Text(text) : ""));
  }
  function BusinessCard({ typingText }) {
    React2.useEffect(() => {
      let typedSpan = document.querySelector(`.${style$3.businessCard + "__content"} span[data-text]`);
      delay(1500, async () => {
        await AnimateText(typedSpan, { addBeam: true });
      });
    }, []);
    return /* @__PURE__ */ React__default.default.createElement("div", { className: style$3.businessCard }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$3.businessCard + "__imageContainer" }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$3.businessCard + "__image" })), /* @__PURE__ */ React__default.default.createElement("div", { className: style$3.businessCard + "__content" }, /* @__PURE__ */ React__default.default.createElement("h1", null, /* @__PURE__ */ React__default.default.createElement("span", null, "Yaroslav"), /* @__PURE__ */ React__default.default.createElement("span", null, "Minakov")), /* @__PURE__ */ React__default.default.createElement("h2", null, /* @__PURE__ */ React__default.default.createElement("span", { "data-text": typingText != null ? typingText : "lets get in touch" }, "web developer")), /* @__PURE__ */ React__default.default.createElement("div", { className: style$3.businessCard + "__socialLinks" }, /* @__PURE__ */ React__default.default.createElement(SocialButton, { href: "mailto:iam.yaroslav@gmail.com", className: style$3.socialButton, linkId: "link-email", title: "send me an email", xlinkHref: "/assets/icons.svg#envelope" }), /* @__PURE__ */ React__default.default.createElement(SocialButton, { href: "https://www.linkedin.com/in/yaroslavminakov", rel: "noopener noreferrer", className: style$3.socialButton, linkId: "link-linkedin", title: "my Linkedin", xlinkHref: "/assets/icons.svg#linkedin" }), /* @__PURE__ */ React__default.default.createElement(SocialButton, { href: "https://github.com/oooyeee", rel: "noopener noreferrer", className: style$3.socialButton, linkId: "link-github", title: "check my github", xlinkHref: "/assets/icons.svg#github" }), /* @__PURE__ */ React__default.default.createElement(SocialButton, { href: "https://wa.me/+351914059971/?text=Hello%20Yaroslav!", rel: "noopener noreferrer", className: style$3.socialButton, linkId: "link-whatsapp", title: "chat with me on WhatsApp", xlinkHref: "/assets/icons.svg#whatsApp_bubble" }))));
  }
  const catalogItem = "Ga8c2b051";
  const styleof_CatalogItem = {
    catalogItem,
    "catalogItem--empty": "G2b07ae52",
    "catalogItem--selected": "G46cac62d"
  };
  function CatalogItem({ name, description, tech, urls, elementType, keyId, isFocussed = false, addStyles = {} }) {
    let content = /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("h3", { className: styleof_CatalogItem.catalogItem + "__header" }, name), /* @__PURE__ */ React__default.default.createElement("div", { className: styleof_CatalogItem.catalogItem + "__image", style: urls.image ? { background: `url(${urls.image})` } : { background: "rgba(0,0,0,0.4)" } }), /* @__PURE__ */ React__default.default.createElement("h4", { className: styleof_CatalogItem.catalogItem + "__title" }, tech), /* @__PURE__ */ React__default.default.createElement("p", { className: styleof_CatalogItem.catalogItem + "__text" }, /* @__PURE__ */ React__default.default.createElement("span", null, description)), /* @__PURE__ */ React__default.default.createElement("div", { className: styleof_CatalogItem.catalogItem + "__links" }, urls.live && /* @__PURE__ */ React__default.default.createElement("a", { href: urls.live, className: styleof_CatalogItem.catalogItem + "__links__live" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#play" })), /* @__PURE__ */ React__default.default.createElement("span", null, "Live")), urls.source && /* @__PURE__ */ React__default.default.createElement("a", { href: urls.source, className: styleof_CatalogItem.catalogItem + "__links__source" }, /* @__PURE__ */ React__default.default.createElement("svg", null, /* @__PURE__ */ React__default.default.createElement("use", { xlinkHref: "/assets/icons.svg#github" })), /* @__PURE__ */ React__default.default.createElement("span", null, "Source"))));
    let el = React2.createElement(elementType != null ? elementType : "li", {
      className: styleof_CatalogItem.catalogItem,
      key: keyId,
      id: `${styleof_CatalogItem.catalogItem}_${keyId}`,
      style: addStyles
    }, content);
    React2.useEffect(() => {
      console.log(":: rendering item: ", keyId);
    });
    return el;
  }
  function EmptyCatalogItem({ elementType, keyId, header: header2 = "...more", addClassName = styleof_CatalogItem["catalogItem--empty"], onClickHandler }) {
    let content = /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("h3", { className: styleof_CatalogItem.catalogItem + "__header" }, header2), /* @__PURE__ */ React__default.default.createElement("div", { className: styleof_CatalogItem.catalogItem + "__image", style: { background: "rgba(0,0,0,0.4)" } }), /* @__PURE__ */ React__default.default.createElement("h4", { className: styleof_CatalogItem.catalogItem + "__title" }, "..."), /* @__PURE__ */ React__default.default.createElement("p", { className: styleof_CatalogItem.catalogItem + "__text" }, /* @__PURE__ */ React__default.default.createElement("span", null, "...")), /* @__PURE__ */ React__default.default.createElement("div", { className: styleof_CatalogItem.catalogItem + "__links" }));
    let el = React2.createElement(
      elementType != null ? elementType : "li",
      {
        className: `${styleof_CatalogItem.catalogItem} ${addClassName}`,
        key: keyId,
        id: `${styleof_CatalogItem.catalogItem}_${keyId}`,
        style: { opacity: "0.75", cursor: "pointer" },
        onClick: onClickHandler
      },
      content
    );
    return el;
  }
  const projectCatalog = "G2b1fec04";
  const sidebar = "Gef0dafbc";
  const itemArea = "G88c4ce41";
  const style$1 = {
    projectCatalog,
    sidebar,
    itemArea
  };
  function animateSidebarOnScroll(stickySidebar, translateY_N_pixels) {
    let lastScrollPositionY = 0;
    let isPushedDown = false;
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > lastScrollPositionY) {
        lastScrollPositionY = window.scrollY;
        if (!isPushedDown) {
          stickySidebar.style["top"] = "0px";
          isPushedDown = true;
        }
      } else {
        lastScrollPositionY = window.scrollY;
        if (isPushedDown) {
          stickySidebar.style["top"] = `${translateY_N_pixels}px`;
          isPushedDown = false;
        }
      }
    });
  }
  function useDebounceState2(initialValue, ms) {
    const [debouncingValue, setDebouncedValue] = React2.useState(initialValue);
    const [debouncedValue, _setDebouncedValue] = React2.useState(debouncingValue);
    React2.useEffect(() => {
      const timer = setTimeout(() => {
        _setDebouncedValue(debouncingValue);
      }, ms);
      return () => {
        clearTimeout(timer);
      };
    }, [debouncingValue]);
    return [debouncedValue, setDebouncedValue];
  }
  const SidebarList = React2.memo(({ jsonArray, isClickedMore, ee }) => {
    const onItemClick = (index) => {
      ee.emit("index", index);
    };
    const Li = ({ text, index }) => /* @__PURE__ */ React__default.default.createElement("li", { onClick: () => {
      onItemClick(index);
    } }, /* @__PURE__ */ React__default.default.createElement("a", { href: `#${styleof_CatalogItem.catalogItem}_${index}` }, text));
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, isClickedMore ? jsonArray.map((item, index) => {
      return /* @__PURE__ */ React__default.default.createElement(Li, { text: item.name, index, key: index });
    }) : (() => {
      let maxItems = jsonArray.length > 5 ? 5 : jsonArray.length;
      let items = [];
      for (let i = 0; i < maxItems; i++) {
        items.push(/* @__PURE__ */ React__default.default.createElement(Li, { text: jsonArray[i].name, key: i, index: i }));
      }
      return items;
    })());
  });
  const CatalogItemArea = React2.memo(({ jsonArray, ee }) => {
    const mqBreakPoint = React2.useMemo(() => {
      const documentRootStyle = typeof document !== "undefined" && getComputedStyle(document.documentElement);
      const mqBreakPoint2 = !!documentRootStyle && documentRootStyle.getPropertyValue("--cardsMediaBreakpoint2");
      return mqBreakPoint2;
    }, []);
    const matchesBreakPoint = () => {
      let matchesMQ = window.matchMedia(`(max-width: ${mqBreakPoint})`).matches;
      return matchesMQ;
    };
    const smallMax = 1;
    const bigMax = 3;
    const giveCardsNumber = () => matchesBreakPoint() ? smallMax : bigMax;
    const [maxPerPage, set_maxPerPage] = React2.useState(bigMax);
    const ccNref = React2.useRef(bigMax);
    const [currentCardsNumber, set_currentCardsNumberForRender] = React2.useState(ccNref.current);
    const set_currentCardsNumber = (num) => {
      ccNref.current = num;
      set_currentCardsNumberForRender(num);
    };
    React2.useEffect(() => {
      document.querySelector(`.${style$1.itemArea}`);
      let initCardsNumber = giveCardsNumber();
      set_maxPerPage(initCardsNumber);
      set_currentCardsNumber(initCardsNumber);
      window.addEventListener("resize", (ev) => {
        initCardsNumber = giveCardsNumber();
        set_maxPerPage(initCardsNumber);
      });
      ee.on("index", (inputIndex) => {
        console.log(`>>> sidebar input: ${inputIndex}`);
        let inputNum = parseInt(inputIndex);
        if (inputNum >= ccNref.current) {
          let ncNum = getNextCardsNumber(inputNum);
          console.log(`>>> current: ${ccNref.current} -- nextCardsNum: ${ncNum}`);
          set_currentCardsNumber(ncNum);
        }
      });
    }, []);
    const getNextCardsNumber = React2.useCallback((currentCardsNumber2) => {
      let cardnum = currentCardsNumber2 + maxPerPage;
      console.log("calculating cardnum: " + cardnum);
      if (cardnum > jsonArray.length) {
        cardnum = jsonArray.length;
      }
      return cardnum;
    }, [currentCardsNumber]);
    const onClickHandler = (ev) => {
      ev.preventDefault();
      let cardnum = getNextCardsNumber(currentCardsNumber);
      set_currentCardsNumber(cardnum);
    };
    const ShowCards = () => {
      let maxCards = bigMax;
      if (typeof maxPerPage !== "undefined" && typeof currentCardsNumber !== "undefined") {
        maxCards = currentCardsNumber > maxPerPage ? currentCardsNumber : maxPerPage;
      }
      console.log(">>> max cards on render: " + maxCards);
      let arr = [];
      let i = 0;
      for (; i < maxCards; i++) {
        let item = jsonArray[i];
        if (!item)
          break;
        let index = i;
        arr.push(/* @__PURE__ */ React__default.default.createElement(
          CatalogItem,
          {
            name: item.name,
            tech: item.tech,
            description: item.description,
            urls: item.urls,
            elementType: "li",
            key: index,
            keyId: index
          }
        ));
      }
      jsonArray.length > maxCards && arr.push(/* @__PURE__ */ React__default.default.createElement(
        EmptyCatalogItem,
        {
          elementType: "li",
          header: "...more",
          key: i,
          keyId: i,
          onClickHandler
        }
      ));
      return arr;
    };
    return /* @__PURE__ */ React__default.default.createElement(
      "ul",
      {
        className: style$1.itemArea + " itemArea",
        style: {}
      },
      ShowCards()
    );
  });
  const ButtonClickMore = ({ isClickedMore, set_isClickedMore }) => {
    const onClickMore = () => {
      set_isClickedMore(!isClickedMore);
    };
    let className = style$1.sidebar + "__button-expand-list";
    className += isClickedMore ? ` ${className}--clicked` : "";
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement(
      "div",
      {
        onClick: onClickMore,
        className
      },
      isClickedMore ? "less..." : "more..."
    ));
  };
  const InputLine = ({ setItemsList, jsonArray }) => {
    const getItemsFromInputValue = (inputValue) => {
      const filteredItems = jsonArray.filter(
        (item) => item.name.toLowerCase().includes(inputValue.toLowerCase()) || item.tech.toLowerCase().includes(inputValue.toLowerCase()) || item.description.toLowerCase().includes(inputValue.toLowerCase())
      );
      return filteredItems;
    };
    const onInputTextChange = (ev) => {
      const inputValue = ev.target.value;
      const filteredItems = getItemsFromInputValue(inputValue);
      setItemsList(filteredItems);
    };
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement(
      "input",
      {
        type: "text",
        className: style$1.sidebar + "__filter__input",
        placeholder: "type",
        onChange: onInputTextChange
      }
    ));
  };
  const FilterLabelSVG_for_filter_checkbox = () => {
    return /* @__PURE__ */ React__default.default.createElement("label", { htmlFor: uiState.checkboxesIDs.filter, className: style$1.sidebar + "__showFilterSwitch" }, /* @__PURE__ */ React__default.default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 10 10",
        style: {
          stroke: "white",
          strokeWidth: "1",
          strokeLinecap: "round"
        }
      },
      /* @__PURE__ */ React__default.default.createElement("path", null),
      /* @__PURE__ */ React__default.default.createElement("path", null)
    ), /* @__PURE__ */ React__default.default.createElement("span", { className: style$1.sidebar + "__showFilterSwitch__text-show" }, "show filter"), /* @__PURE__ */ React__default.default.createElement("span", { className: style$1.sidebar + "__showFilterSwitch__text-hide" }, "hide filter"));
  };
  function ProjectCatalog({ jsonArray }) {
    const [isClickedMore, set_isClickedMore] = React2.useState(false);
    const [debouncedValue, set_itemsList] = useDebounceState2(jsonArray, 500);
    const ee = React2.useRef(new EE({
      enableDebugErrorMessages: true
    }));
    React2.useEffect(() => {
      let sidebarSticky = document.querySelector(`.${style$1.sidebar + "__stickytrack"}`);
      console.log(":: HERE ::");
      console.log(sidebarSticky);
      animateSidebarOnScroll(sidebarSticky, 48);
    }, []);
    return /* @__PURE__ */ React__default.default.createElement("div", { className: style$1.projectCatalog }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$1.sidebar }, /* @__PURE__ */ React__default.default.createElement("div", { className: style$1.sidebar + "__stickytrack" }, /* @__PURE__ */ React__default.default.createElement(FilterLabelSVG_for_filter_checkbox, null), /* @__PURE__ */ React__default.default.createElement("label", { className: style$1.sidebar + "__filter", id: style$1.sidebar + "__filter" }, /* @__PURE__ */ React__default.default.createElement("span", null, "filter:"), /* @__PURE__ */ React__default.default.createElement(InputLine, { setItemsList: set_itemsList, jsonArray })), /* @__PURE__ */ React__default.default.createElement("ul", { className: style$1.sidebar + "__list" }, /* @__PURE__ */ React__default.default.createElement(
      SidebarList,
      {
        jsonArray: debouncedValue,
        ee: ee.current,
        isClickedMore
      }
    )), /* @__PURE__ */ React__default.default.createElement(
      ButtonClickMore,
      {
        isClickedMore,
        set_isClickedMore
      }
    ))), /* @__PURE__ */ React__default.default.createElement(
      CatalogItemArea,
      {
        jsonArray: debouncedValue,
        ee: ee.current
      }
    ));
  }
  const intersection = "Gaf8798b3";
  const style = {
    intersection
  };
  const svgClass = style.intersection + "__svg";
  function Intersection({ title, marginTop, marginBottom } = { title: "no title", marginTop: "", marginBottom: "" }) {
    return /* @__PURE__ */ React__default.default.createElement("div", { className: style.intersection, style: { marginTop: marginTop != null ? marginTop : "", marginBottom: marginBottom != null ? marginBottom : "" } }, /* @__PURE__ */ React__default.default.createElement("svg", { className: svgClass, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 48", style: { maxHeight: "48px", fill: "none" } }, /* @__PURE__ */ React__default.default.createElement("rect", { className: svgClass + "__oval", width: "30", height: "46", x: "1", y: "1", ry: "15" }), /* @__PURE__ */ React__default.default.createElement("path", { className: svgClass + "__scroller", d: "M16,9 L16,15" })), /* @__PURE__ */ React__default.default.createElement("span", null, title));
  }
  function HydratableApp({ hydration: hydration2 }) {
    React2.useEffect(() => {
      console.log(":: HYDRATION ::");
      console.log(hydration2);
    }, []);
    return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement(DefaultLayout, null, /* @__PURE__ */ React__default.default.createElement("section", { id: "businessCard" }, /* @__PURE__ */ React__default.default.createElement(BusinessCard, null)), /* @__PURE__ */ React__default.default.createElement(Intersection, { title: "projects", marginTop: "-68px", marginBottom: "100px" }), /* @__PURE__ */ React__default.default.createElement("section", { id: "projects", style: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ React__default.default.createElement(ProjectCatalog, { jsonArray: hydration2.projectCatalog })), /* @__PURE__ */ React__default.default.createElement(Intersection, { title: "about", marginBottom: "44px" })));
  }
  function getHydration() {
    let json = null;
    try {
      json = JSON.parse(document.querySelector(`#${ssr_json}`).innerHTML);
    } catch (err) {
      console.log(err);
    }
    return json;
  }
  let DOM = {};
  window.addEventListener("load", () => {
  });
  function wrapTry(fn) {
    try {
      fn();
    } catch (err) {
      console.error(err);
    }
  }
  wrapTry(() => {
    DOM["appRoot"] = document.querySelector(`.${appRoot}`);
    console.log("GOT HYDRATION", getHydration());
    hydrateRoot(DOM["appRoot"], /* @__PURE__ */ React__default.default.createElement(HydratableApp, { hydration: getHydration() }));
  });
  wrapTry(() => {
    DOM["backgroundRoot"] = document.querySelector(`.${backgroundRoot}`);
    hydrateRoot(DOM["backgroundRoot"], /* @__PURE__ */ React__default.default.createElement(Background, null));
  });
})(React, ReactDOM);
