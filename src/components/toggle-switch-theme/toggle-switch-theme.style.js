import styled from 'styled-components';

export const Wrapper = styled.div`
    /////////////////////////////////////////////////
    // Day State
    /////////////////////////////////////////////////
    .toggle {
        position: relative;
        display: inline-block;
        width: 90px;
        padding: 4px;
        border-radius: 40px;
    }

    .toggle:before,
    .toggle:after {
        content: '';
        display: table;
    }

    .toggle:after {
        clear: both;
    }

    .toggle-bg {
        position: absolute;
        top: -4px;
        left: -4px;
        width: 100%;
        height: 100%;
        background-color: #c0e6f6;
        border-radius: 40px;
        border: 4px solid #81c0d5;
        transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .toggle-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid red;
        border-radius: 40px;
        z-index: 2;
        opacity: 0;
        cursor: pointer;
    }

    .toggle-switch {
        position: relative;
        width: 30px;
        height: 30px;
        margin-left: 50px;
        background-color: #f5eb42;
        border: 4px solid #e4c74d;
        border-radius: 50%;
        transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .toggle-switch-figure {
        position: absolute;
        bottom: -14px;
        left: -50px;
        display: block;
        width: 75px;
        height: 25px;
        border: 8px solid #d4d4d2;
        border-radius: 20px;
        background-color: #fff;
        transition-duration: 2s;
        transform: scale(0.4);
        transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        &:after {
            content: '';
            display: block;
            position: relative;
            top: -65px;
            right: -42px;
            width: 15px;
            height: 15px;
            border: 8px solid #d4d4d2;
            border-radius: 100%;
            border-right-color: transparent;
            border-bottom-color: transparent;
            transition-duration: 2s;
            transform: rotateZ(70deg);
            background-color: #fff;
        }
        &:before {
            content: '';
            display: block;
            position: relative;
            top: -25px;
            right: -10px;
            width: 30px;
            height: 30px;
            border: 8px solid #d4d4d2;
            border-radius: 100%;
            border-right-color: transparent;
            border-bottom-color: transparent;
            transition-duration: 2s;
            transform: rotateZ(30deg);
            background-color: #fff;
        }
    }

    .toggle-switch-figureAlt {
        content: '';
        position: absolute;
        top: 5px;
        left: 2px;
        width: 2px;
        height: 2px;
        background-color: #efeeda;
        border-radius: 100%;
        border: 4px solid #dee1c5;

        box-shadow: 42px -7px 0 -3px #fcfcfc, 75px -10px 0 -3px #fcfcfc,
            54px 4px 0 -4px #fcfcfc, 83px 7px 0 -2px #fcfcfc,
            63px 18px 0 -4px #fcfcfc, 44px 28px 0 -2px #fcfcfc,
            78px 23px 0 -3px #fcfcfc;

        transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-duration: 2s;
        transform: scale(0);
    }

    .toggle-switch-figureAlt:before {
        content: '';
        position: absolute;
        top: -8px;
        left: 10px;
        width: 5px;
        height: 5px;
        background-color: #efeeda;
        border-radius: 100%;
        border: 2px solid #dee1c5;
    }

    .toggle-switch-figureAlt:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 7px;
        width: 1px;
        height: 1px;
        background-color: #efeeda;
        border-radius: 100%;
        border: 2px solid #dee1c5;
    }

    /////////////////////////////////////////////////
    // Night State
    /////////////////////////////////////////////////
    .toggle-input:checked ~ .toggle-switch {
        margin-left: 0;
        border-color: #dee1c5;
        background-color: #fffdf2;
    }

    .toggle-input:checked ~ .toggle-bg {
        background-color: #484848;
        border-color: #202020;
    }

    .toggle-input:checked ~ .toggle-switch .toggle-switch-figure {
        margin-left: 40px;
        opacity: 0;
        transform: scale(0.1);
        transition-duration: 2s;
    }

    .toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {
        transform: scale(1);
        transition-duration: 2s;
    }
`;
