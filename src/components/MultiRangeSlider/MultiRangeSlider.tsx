import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../utils/useDebounce';
import StyledSlider from './MultiRangeSlider.styles';

interface IProps {
  min: number;
  max: number;
  minPrice: number;
  maxPrice: number;
  onChange: (options: { min: number; max: number }) => void;
}

const MultiRangeSlider: React.FC<IProps> = ({ min, max, minPrice, maxPrice, onChange }) => {
  const [minVal, setMinVal] = useState(minPrice);
  const [maxVal, setMaxVal] = useState(maxPrice);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentMinVal = useDebounce(minVal);
  const currentMaxVal = useDebounce(maxVal);

  const minValRef = useRef(minPrice);
  const maxValRef = useRef(maxPrice);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    onChange({ max: currentMaxVal, min: currentMinVal });
  }, [currentMinVal, currentMaxVal, onChange, setSearchParams, searchParams]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <StyledSlider>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? '5' : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <p className="slider__left-value">{`$ ${minVal.toFixed(2)}`}</p>
        <p className="slider__right-value">{`$ ${maxVal.toFixed(2)}`}</p>
      </div>
    </StyledSlider>
  );
};

export default MultiRangeSlider;
