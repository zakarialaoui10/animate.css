(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      (global.AnimateCss = factory()));
})(this, function () {
  'use strict';

  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x;
  }

  const bounce = (duration, iterations = 1, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {transform: 'translate3d(0, -30px, 0) scaleY(1.1)', offset: 0.4},
        {transform: 'translate3d(0, -15px, 0) scaleY(1.05)', offset: 0.7},
        {transform: 'translate3d(0, 0, 0) scaleY(0.95)', offset: 0.8},
        {transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const flash = (duration = 1000, iterations = Infinity, easing = 'linear') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {opacity: 0, offset: 0.25},
        {opacity: 1, offset: 0.5},
        {opacity: 0, offset: 0.75},
        {opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const headShake = (duration = 1000, iterations = 1, easing = 'ease-in-out') => {
    return {
      keyframes: [
        {transform: 'translateX(0) rotateY(0deg)', offset: 0},
        {transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065},
        {transform: 'translateX(5px) rotateY(7deg)', offset: 0.185},
        {transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315},
        {transform: 'translateX(2px) rotateY(3deg)', offset: 0.435},
        {transform: 'translateX(0) rotateY(0deg)', offset: 0.5},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const heartBeat = (duration = 1000, iterations = Infinity, easing = 'ease-in-out') => {
    return {
      keyframes: [
        {transform: 'scale(1)', offset: 0},
        {transform: 'scale(1.3)', offset: 0.14},
        {transform: 'scale(1)', offset: 0.28},
        {transform: 'scale(1.3)', offset: 0.42},
        {transform: 'scale(1)', offset: 0.7},
      ],
      config: {
        duration: duration * 1.3, // To Fix
        easing,
        iterations,
      },
    };
  };
  const jello = (duration = 1000, iterations = Infinity, easing = 'ease-in-out') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222},
        {transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333},
        {transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444},
        {transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555},
        {transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666},
        {transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777},
        {transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const pulse = (duration = 1000, iterations = Infinity, easing = 'ease-in-out') => {
    return {
      keyframes: [
        {transform: 'scale3d(1, 1, 1)', offset: 0},
        {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5},
        {transform: 'scale3d(1, 1, 1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rubberBand = (duration = 1000, iterations = 1, easing = 'ease-in-out') => {
    return {
      keyframes: [
        {transform: 'scale3d(1, 1, 1)', offset: 0},
        {transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3},
        {transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4},
        {transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5},
        {transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65},
        {transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75},
        {transform: 'scale3d(1, 1, 1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const shake = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.1},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.2},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.3},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.4},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.5},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.6},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.7},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.8},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const shakeX = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.1},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.2},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.3},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.4},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.5},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.6},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.7},
        {transform: 'translate3d(10px, 0, 0)', offset: 0.8},
        {transform: 'translate3d(-10px, 0, 0)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const shakeY = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {transform: 'translate3d(0, -10px, 0)', offset: 0.1},
        {transform: 'translate3d(0, 10px, 0)', offset: 0.2},
        {transform: 'translate3d(0, -10px, 0)', offset: 0.3},
        {transform: 'translate3d(0, 10px, 0)', offset: 0.4},
        {transform: 'translate3d(0, -10px, 0)', offset: 0.5},
        {transform: 'translate3d(0, 10px, 0)', offset: 0.6},
        {transform: 'translate3d(0, -10px, 0)', offset: 0.7},
        {transform: 'translate3d(0, 10px, 0)', offset: 0.8},
        {transform: 'translate3d(0, -10px, 0)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const swing = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, // Equivalent to `from`
        {transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2},
        {transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4},
        {transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6},
        {transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8},
        {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, // Equivalent to `to`
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const tada = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'scale3d(1, 1, 1)', offset: 0},
        {transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1},
        {transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8},
        {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9},
        {transform: 'scale3d(1, 1, 1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const wobble = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0}, // Equivalent to `from`
        {transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15},
        {transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.3},
        {transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45},
        {transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6},
        {transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75},
        {transform: 'translate3d(0, 0, 0)', offset: 1}, // Equivalent to `to`
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var attentionSeekers = {
    bounce,
    flash,
    headShake,
    heartBeat,
    jello,
    pulse,
    rubberBand,
    shake,
    shakeX,
    shakeY,
    swing,
    tada,
    wobble,
  };

  const backInDown = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translateY(-1200px) scale(0.7)', opacity: 0.7, offset: 0},
        {transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.8},
        {transform: 'scale(1)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backInLeft = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7, offset: 0},
        {transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.8},
        {transform: 'scale(1)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backInRight = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translateX(2000px) scale(0.7)', opacity: 0.7, offset: 0},
        {transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.8},
        {transform: 'scale(1)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backInUp = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translateY(1200px) scale(0.7)', opacity: 0.7, offset: 0},
        {transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.8},
        {transform: 'scale(1)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var backIn = {
    backInDown,
    backInLeft,
    backInRight,
    backInUp,
  };

  const backOutDown = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'scale(1)', opacity: 1, offset: 0},
        {transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.2},
        {transform: 'translateY(700px) scale(0.7)', opacity: 0.7, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backOutLeft = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'scale(1)', opacity: 1, offset: 0},
        {transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.2},
        {transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backOutRight = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'scale(1)', opacity: 1, offset: 0},
        {transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.2},
        {transform: 'translateX(2000px) scale(0.7)', opacity: 0.7, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const backOutUp = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'scale(1)', opacity: 1, offset: 0},
        {transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.2},
        {transform: 'translateY(-700px) scale(0.7)', opacity: 0.7, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var backOut = {
    backOutDown,
    backOutLeft,
    backOutRight,
    backOutUp,
  };

  const bounceIn = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0},
        {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
        {transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4},
        {opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6},
        {transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8},
        {opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceInDown = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, -3000px, 0) scaleY(3)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 25px, 0) scaleY(0.9)', offset: 0.6},
        {transform: 'translate3d(0, -10px, 0) scaleY(0.95)', offset: 0.75},
        {transform: 'translate3d(0, 5px, 0) scaleY(0.985)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceInLeft = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-3000px, 0, 0) scaleX(3)', offset: 0},
        {opacity: 1, transform: 'translate3d(25px, 0, 0) scaleX(1)', offset: 0.6},
        {transform: 'translate3d(-10px, 0, 0) scaleX(0.98)', offset: 0.75},
        {transform: 'translate3d(5px, 0, 0) scaleX(0.995)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceInRight = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(3000px, 0, 0) scaleX(3)', offset: 0},
        {opacity: 1, transform: 'translate3d(-25px, 0, 0) scaleX(1)', offset: 0.6},
        {transform: 'translate3d(10px, 0, 0) scaleX(0.98)', offset: 0.75},
        {transform: 'translate3d(-5px, 0, 0) scaleX(0.995)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceInUp = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, 3000px, 0) scaleY(5)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)', offset: 0.6},
        {transform: 'translate3d(0, 10px, 0) scaleY(0.95)', offset: 0.75},
        {transform: 'translate3d(0, -5px, 0) scaleY(0.985)', offset: 0.9},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var bounceIn_1 = {
    bounceIn,
    bounceInDown,
    bounceInLeft,
    bounceInRight,
    bounceInUp,
  };

  const bounceOutDown = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 10px, 0) scaleY(0.985)', offset: 0.2},
        {opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)', offset: 0.45},
        {opacity: 0, transform: 'translate3d(0, 2000px, 0) scaleY(3)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceOutLeft = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(20px, 0, 0) scaleX(0.9)', offset: 0.2},
        {opacity: 0, transform: 'translate3d(-2000px, 0, 0) scaleX(2)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceOutRight = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(-20px, 0, 0) scaleX(0.9)', offset: 0.2},
        {opacity: 0, transform: 'translate3d(2000px, 0, 0) scaleX(2)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const bounceOutUp = (
    duration = 1000,
    easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {transform: 'translate3d(0, -10px, 0) scaleY(0.985)', offset: 0.2},
        {opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)', offset: 0.4},
        {opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)', offset: 0.45},
        {opacity: 0, transform: 'translate3d(0, -2000px, 0) scaleY(3)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var bounceOut_1 = {
    bounceOutDown,
    bounceOutLeft,
    bounceOutRight,
    bounceOutUp,
  };

  const fadeIn = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInBottomLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-100%, 100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInBottomRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInDown = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInDownBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInLeftBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInRightBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInTopLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-100%, -100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInTopRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(100%, -100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInUp = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeInUpBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var fadeIn_1 = {
    fadeIn,
    fadeInBottomLeft,
    fadeInBottomRight,
    fadeInDown,
    fadeInDownBig,
    fadeInLeft,
    fadeInLeftBig,
    fadeInRight,
    fadeInRightBig,
    fadeInTopLeft,
    fadeInTopRight,
    fadeInUp,
    fadeInUpBig,
  };

  const fadeOut = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutBottomLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(-100%, 100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutBottomRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutDown = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutDownBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutLeftBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutRightBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutTopLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(-100%, -100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutTopRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(100%, -100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutUp = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const fadeOutUpBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0},
        {opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var fadeOut_1 = {
    fadeOut,
    fadeOutBottomLeft,
    fadeOutBottomRight,
    fadeOutDown,
    fadeOutDownBig,
    fadeOutLeft,
    fadeOutLeftBig,
    fadeOutRight,
    fadeOutRightBig,
    fadeOutTopLeft,
    fadeOutTopRight,
    fadeOutUp,
    fadeOutUpBig,
  };

  const flip = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
      keyframes: [
        {
          transform:
            'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
          offset: 0,
          easing: 'ease-out',
        },
        {
          transform:
            'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
          offset: 0.4,
          easing: 'ease-out',
        },
        {
          transform:
            'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
          offset: 0.5,
          easing: 'ease-in',
        },
        {
          transform:
            'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
          offset: 0.8,
          easing: 'ease-in',
        },
        {
          transform:
            'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
          offset: 1,
          easing: 'ease-in',
        },
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const flipInX = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {
          transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
          opacity: 0,
          offset: 0,
          easing: 'ease-in',
        },
        {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4, easing: 'ease-in'},
        {transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1, offset: 0.6},
        {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8},
        {transform: 'perspective(400px)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const flipInY = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {
          transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
          opacity: 0,
          offset: 0,
          easing: 'ease-in',
        },
        {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4, easing: 'ease-in'},
        {transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, offset: 0.6},
        {transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8},
        {transform: 'perspective(400px)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const flipOutX = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'perspective(400px)', offset: 0},
        {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: 0.3},
        {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration: duration * 0.75,
        easing,
        iterations,
      },
    };
  };
  const flipOutY = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'perspective(400px)', offset: 0},
        {transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3},
        {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration: duration * 0.75,
        easing,
        iterations,
      },
    };
  };
  var flippers = {
    flip,
    flipInX,
    flipInY,
    flipOutX,
    flipOutY,
  };

  const lightSpeedInLeft = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: 0, offset: 0},
        {transform: 'skewX(-20deg)', opacity: 1, offset: 0.6},
        {transform: 'skewX(5deg)', offset: 0.8},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const lightSpeedInRight = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
      keyframes: [
        {transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: 0, offset: 0},
        {transform: 'skewX(20deg)', opacity: 1, offset: 0.6},
        {transform: 'skewX(-5deg)', offset: 0.8},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const lightSpeedOutLeft = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const lightSpeedOutRight = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var lightspeed = {
    lightSpeedInLeft,
    lightSpeedInRight,
    lightSpeedOutLeft,
    lightSpeedOutRight,
  };

  const rotateIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0, offset: 0},
        {transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateInDownLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 0},
        {transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateInDownRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 0},
        {transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateInUpLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 0},
        {transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateInUpRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0, offset: 0},
        {transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var rotateIn_1 = {
    rotateIn,
    rotateInDownLeft,
    rotateInDownRight,
    rotateInUpLeft,
    rotateInUpRight,
  };

  const rotateOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateOutDownLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateOutDownRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateOutUpLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rotateOutUpRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, offset: 0},
        {transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var rotateOut_1 = {
    rotateOut,
    rotateOutDownLeft,
    rotateOutDownRight,
    rotateOutUpLeft,
    rotateOutUpRight,
  };

  const slideInDown = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, -100%, 0)', visibility: 'visible', offset: 0},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideInLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideInRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideInUp = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0},
        {transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var slideIn = {
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp,
  };

  const slideOutDown = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideOutLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideOutRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const slideOutUp = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {transform: 'translate3d(0, 0, 0)', offset: 0},
        {visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var slideOut = {
    slideOutDown,
    slideOutLeft,
    slideOutRight,
    slideOutUp,
  };

  const hinge = (duration = 2000, easing = 'ease-in-out', iterations = 1) => {
    return {
      keyframes: [
        {offset: 0, animationTimingFunction: easing},
        {transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2, animationTimingFunction: easing},
        {
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.4,
          opacity: 1,
          animationTimingFunction: easing,
        },
        {
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.6,
          opacity: 1,
          animationTimingFunction: easing,
        },
        {transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.8, animationTimingFunction: easing},
        {transform: 'translate3d(0, 700px, 0)', opacity: 0, offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const jackInTheBox = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {
          opacity: 0,
          transform: 'scale(0.1) rotate(30deg)',
          transformOrigin: 'center bottom',
          offset: 0,
        },
        {transform: 'rotate(-10deg)', offset: 0.5},
        {transform: 'rotate(3deg)', offset: 0.7},
        {opacity: 1, transform: 'scale(1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rollIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', offset: 0},
        {opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const rollOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', offset: 0},
        {opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  var specials = {
    hinge,
    jackInTheBox,
    rollIn,
    rollOut,
  };

  const zoomIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0},
        {opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0.5},
        {opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const zoomInDown = (
    duration = 1000,
    easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
          offset: 0,
          easing: easingIn,
        },
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
          offset: 0.6,
          easing: easingOut,
        },
        {
          opacity: 1,
          transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
          offset: 1,
        },
      ],
      config: {
        duration,
        iterations,
      },
    };
  };
  const zoomInLeft = (
    duration = 1000,
    easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
          offset: 0,
          easing: easingIn,
        },
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
          offset: 0.6,
          easing: easingOut,
        },
        {
          opacity: 1,
          transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
          offset: 1,
        },
      ],
      config: {
        duration,
        iterations,
      },
    };
  };
  const zoomInRight = (
    duration = 1000,
    easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
          offset: 0,
          easing: easingIn,
        },
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
          offset: 0.6,
          easing: easingOut,
        },
        {
          opacity: 1,
          transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
          offset: 1,
        },
      ],
      config: {
        duration,
        iterations,
      },
    };
  };
  const zoomInUp = (
    duration = 1000,
    easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    iterations = 1,
  ) => {
    return {
      keyframes: [
        {
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
          offset: 0,
          easing: easingIn,
        },
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
          offset: 0.6,
          easing: easingOut,
        },
        {
          opacity: 1,
          transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
          offset: 1,
        },
      ],
      config: {
        duration,
        iterations,
      },
    };
  };
  var zoomIn_1 = {
    zoomIn,
    zoomInDown,
    zoomInLeft,
    zoomInRight,
    zoomInUp,
  };

  const zoomOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
      keyframes: [
        {
          opacity: 1,
          transform: 'scale3d(1, 1, 1)',
          offset: 0,
        },
        {
          opacity: 0,
          transform: 'scale3d(0.3, 0.3, 0.3)',
          offset: 0.5,
        },
        {
          opacity: 0,
          transform: 'scale3d(0.3, 0.3, 0.3)',
          offset: 1,
        },
      ],
      config: {
        duration,
        easing,
        iterations,
      },
    };
  };
  const zoomOutDown = (
    duration = 1000,
    iterations = 1,
    easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)',
  ) => {
    return {
      keyframes: [
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
          offset: 0.4,
          easing: easingIn,
        },
        {
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
          offset: 1,
          easing: easingOut,
        },
      ],
      config: {
        duration,
        iterations,
      },
    };
  };
  const zoomOutLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
          offset: 0.4,
        },
        {opacity: 0, transform: 'scale(0.1) translate3d(-2000px, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
      transformOrigin: 'left center',
    };
  };
  const zoomOutRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
      keyframes: [
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
          offset: 0.4,
        },
        {opacity: 0, transform: 'scale(0.1) translate3d(2000px, 0, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
      transformOrigin: 'right center',
    };
  };
  const zoomOutUp = (duration = 1000, iterations = 1, easing = 'linear') => {
    return {
      keyframes: [
        {
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
          offset: 0.4,
        },
        {opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)', offset: 1},
      ],
      config: {
        duration,
        easing,
        iterations,
      },
      transformOrigin: 'center bottom',
      timingFunction: [
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'cubic-bezier(0.175, 0.885, 0.32, 1)',
      ],
    };
  };
  var zoomOut_1 = {
    zoomOut,
    zoomOutDown,
    zoomOutLeft,
    zoomOutRight,
    zoomOutUp,
  };

  var js = {
    ...attentionSeekers,
    ...backIn,
    ...backOut,
    ...bounceIn_1,
    ...bounceOut_1,
    ...fadeIn_1,
    ...fadeOut_1,
    ...flippers,
    ...lightspeed,
    ...rotateIn_1,
    ...rotateOut_1,
    ...slideIn,
    ...slideOut,
    ...specials,
    ...zoomIn_1,
    ...zoomOut_1,
  };

  var index = /*@__PURE__*/ getDefaultExportFromCjs(js);

  return index;
});
