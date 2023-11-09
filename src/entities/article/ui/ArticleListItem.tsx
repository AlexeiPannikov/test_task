import React, {PropsWithChildren, useEffect, useState} from 'react';
import {GetContentsResponseItem, H3} from "@/shared";
import styled, {useTheme} from "styled-components";
import {NavLink, useLocation, useNavigate, useNavigation} from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru'

interface IProps {
    data: GetContentsResponseItem
}

const ArticleBox = styled.div<{ isvisited?: boolean }>`
  margin: 24px 0 0 0;
  display: flex;
  align-items: flex-start;
  //opacity: ${props => props.isvisited ? 0.5 : 1};
`

const ArticleImageBox = styled.div`
  width: 240px;
  border-radius: 8px;
  @media ${props => props.theme.media.extraSmall} {
    width: 144px;
  }
`

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`

const ArticleTextBox = styled.div`
  height: 100%;
  margin-left: 16px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`

const Description = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 10px;
  @media ${props => props.theme.media.small} {
    display: none;
  }
`

const Published = styled.div`
  display: flex;
  align-items: center;
  min-height: 16px;
`

const Time = styled.time`
  line-height: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryTextColor};
`

const getTimeAgo = (date: string | undefined) => {
    if (!date) return
    return moment.unix(Number(date)).locale("ru").fromNow()
}

const ParentImage = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
`

const StyledNavLink = styled(NavLink)`
  :hover {
    color: ${props => props.theme.colors.linkHoverColor};
  }

  :visited {
    color: red !important;
  }

  text-decoration: none;
`

const Title = ({url, text}: { url: string, text: string }) => {
    const theme = useTheme()

    return (
        <StyledNavLink
            to={url}
        >
            <H3 dangerouslySetInnerHTML={{__html: text}}/>
        </StyledNavLink>
    )
}

export const ArticleListItem = ({data}: PropsWithChildren<IProps>) => {

    const onLinkClick = () => {
        localStorage
    }

    const getAttachmentSourceParent = () =>
        data.parents?.find((item) => item?.type === "source")?.attachment

    return (
        <ArticleBox>
            <NavLink
                to={data.url}
                onClick={}
            >
                <ArticleImageBox>
                    <ArticleImage
                        src={"https://i.simpalsmedia.com/point.md/news/370x194/" + data.thumbnail}
                    />
                </ArticleImageBox>
            </NavLink>
            <ArticleTextBox>
                <Title url={data.url} text={data.title?.short || ""}/>
                <Description dangerouslySetInnerHTML={{__html: data.description?.intro || ""}}/>
                <Published>
                    {
                        getAttachmentSourceParent()
                        &&
                        <ParentImage
                            src={"https://i.simpalsmedia.com/point.md/logo/" + getAttachmentSourceParent()}
                        />
                    }
                    <Time>
                        {getTimeAgo(data.dates?.posted)}
                    </Time>
                </Published>
            </ArticleTextBox>
        </ArticleBox>
    );
};