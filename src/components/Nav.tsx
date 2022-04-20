import styled from "styled-components";
import Icon from "./icon";
import { NavLink} from "react-router-dom";
import React from "react";


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 4px 0;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.selected {
          color: #329085;
          .icon {
            fill: #329085;
          }
        }
        }
      }
    }
  
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/Tags" exact activeClassName="selected">
                        <Icon name="tag"/>
                        Tags
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tally" activeClassName="selected">
                        <Icon name="money"/>
                        Tally
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" activeClassName="selected">
                        <Icon name="statistic"/>
                        Statistic
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
}
export default Nav