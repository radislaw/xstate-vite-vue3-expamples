import {createMachine} from "xstate";

export const fontMachine = createMachine({
    id: 'font',
    type: 'parallel',
    states: {
        bold: {
            initial: 'off',
            states: {
                on: {
                    on: {
                        B: 'off'
                    }
                },
                off: {
                    on: {
                        B: 'on'
                    }
                }
            },
        },
        italic: {
            initial: 'off',
            states: {
                on: {
                    on: {
                        I: 'off'
                    }
                },
                off: {
                    on: {
                        I: 'on'
                    }
                }
            },
        },
        line: {
            initial: 'off',
            states: {
                off: {
                  on: {
                      LINE_THROUGH: 'lt',
                      UNDERLINE: 'u'
                  }
                },
                u: {
                    on: {
                        LINE_THROUGH: 'lt',
                        UNDERLINE: 'off'
                    }
                },
                lt: {
                    on: {
                        LINE_THROUGH: 'off',
                        UNDERLINE: 'u'
                    }
                }
            },
        }
    }
});

