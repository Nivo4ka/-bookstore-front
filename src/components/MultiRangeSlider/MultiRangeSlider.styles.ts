import styled from 'styled-components';

export const StyledSlider = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 17px 90px;
  background-color: #F0F4EF;
  border-radius: 16px;
  .slider {
    position: relative;
    width: 379px;

  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  .slider__track {
    background-color: #D6D8E7;
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: #BFCC94;
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    margin: 27px 0 0 0 !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    padding: 0;
  }

  .slider__left-value {
    left: 0;
  }

  .slider__right-value {
    right: 0;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 379px;
    outline: none;
    :hover~.slider .slider__range{
        background-color: #8D9F4F;
    }
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
  }

  .thumb::-webkit-slider-thumb {
    background-color: #F7F7FC;
    border: 2px solid #BFCC94;
    border-radius: 50%;
    cursor: pointer;
    height: 32px;
    width: 32px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
    transition: 200ms ease all;
    :hover{
      border: 2px solid #8D9F4F;
    }
    :active{
      outline: 8px solid #b9bac4cc;
    }
    :hover~div div{

        background-color: #8D9F4F;

    }
  }
  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #F7F7FC;
    border: 2px solid #BFCC94;
    border-radius: 50%;
    cursor: pointer;
    height: 32px;
    width: 32px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
    transition: 200ms ease all;
    :hover{
      border: 2px solid #8D9F4F;
    }
    :active{
      outline: 8px solid #b9bac4cc;
    }
  }

`;
