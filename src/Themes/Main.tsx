const colors = {
  main: "#b260e9",
  light: "#cab9d5",
  dark: "#23152b",
  error: "#d3294e",

  white: "#fff",
  transparentWhite: (opacity: string) => {
    return `rgba(255, 255, 255, ${opacity})`;
  },
  black: "#000",
  transparentBlack: "rgba(0, 0, 0, .1)",
  lightGray: "#ccc",
};

const MainTheme = {
  body: {
    fontColor: colors.white,
    fontSize: "16px",
    linkColor: colors.main,

    bgColor: colors.dark,
  },

  general: {
    borderRadius: "12px",

    fontName: `'Roboto', sans-serif`,
    fontColor: colors.white,
    fontSize: "14px",
  },

  userHeader: {
    avatarSize: "100px",
    avatarBg: colors.main,

    name: {
      fontColor: colors.white,
    },

    links: {
      fontColor: colors.main,
      separatorColor: colors.white,
    },
  },

  navMenu: {
    bgColor: colors.dark,

    bar: {
      bgColor: colors.main,

      button: {
        hover: {
          bgColor: colors.light,
        },
      },
    },
  },

  button: {
    fontColor: colors.white,
    fontSize: "18px",
    bgColor: colors.main,

    hover: {
      fontColor: colors.main,
      bgColor: colors.dark,
    },

    disabled: {
      fontColor: colors.dark,
      bgColor: colors.light,
    },
  },

  field: {
    fontColor: colors.white,
    fontSize: "18px",
    bgColor: colors.transparentWhite(".05"),
    borderColor: colors.main,

    label: {
      size: "50px",
      fontColor: colors.lightGray,
      top: 0,

      focus: {
        fontColor: colors.white,
        fontSize: "12px",
        top: "-16px",
        left: 0,
      },
    },

    iconLabel: {
      fontColor: colors.main,
      size: "50px",
    },

    focus: {
      bgColor: colors.transparentWhite(".15"),
    },

    disabled: {
      fontColor: colors.lightGray,
    },

    error: {
      borderColor: colors.error,
      fontColor: colors.error,
    },
  },

  check: {
    boxColor: colors.white,
    fontColor: colors.main,
    borderRadius: "4px",
  },

  progressRing: {
    ringSize: "100px",
    strokeColor: colors.white,
    strokeProgressColor: colors.main,
    strokeWidth: 5,
    ringFill: "transparent",
    fontColor: colors.white,
    fontSize: "20px",
  },
};

export default MainTheme;
