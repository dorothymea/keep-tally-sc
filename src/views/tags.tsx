import Layout from "components/layout";
import React from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "components/icon";
import { Link } from "react-router-dom";
import {Button} from "../components/Button";
import {Center} from "../components/Center";

const TagList = styled.ol`
  font-size: 16px;
  >li{
    box-shadow: inset 0px -0.5px 0px #BCBBC1;
    >a {
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

function Tags() {
    const {tags,addTag} = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map((tag: {id: number ,name:string }) =>
                    <li key={tag.id}>
                        <Link to={"/tags/" + tag.id }>
                            {tag.name}
                            <Icon name="right"/>
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );

}
export default Tags;