import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { StyledDropDownList } from './DropDownList.styles';

interface IFilter {
  id: number;
  name: string;
  isCheck: boolean;
}

interface IProps {
  onClick?: () => void;
  onChangeFilter: (index: number) => void;
  className?: string;
  icon?: string;
  name?: string;
  arrFilter?: IFilter[] | [];
  setArrFilter?: () => IFilter[];
}

const DropDownList: React.FC<IProps> = (props) => {
  const [listIsActive, setListIsActive] = useState(false);
  const onchangeFilter = () => {
    setListIsActive(!listIsActive);
  };

  // const onChangeFilterPoint = (index: number) => {
  //   arrFilter[index].isCheck = !arrFilter[index].isCheck;
  //   setArrFilter([...arrFilter]);
  // };

  return (
    <StyledDropDownList
      isActive={listIsActive}
    >
      <div
        className={`styled-drop-down-list__name ${props.className}`}
        onClick={onchangeFilter}
      >
        <p>{props.name}</p>
        <img src={props.icon} alt={props.icon} />
      </div>

      <div className="styled-drop-down-list__list">
        <div className="list__decoration" />
        <div className="list__main-info">
          {(props.name?.includes('Sort by') || props.name?.includes('Genre'))
            ? (<ul>
              {props.arrFilter && props.arrFilter.map((item, index) => (
                <li key={index}>
                  {props.name?.includes('Genre') &&
                    (<CheckBox
                      value={item.isCheck}
                      index={index}
                      onChange={(index) => props.onChangeFilter(index)}
                    />)}
                  <p>{item.name}</p>
                </li>
              ))}
               </ul>)
            : <div>sdfdfaseff</div>
          }

        </div>
      </div>

    </StyledDropDownList>
  );
};

export default DropDownList;
