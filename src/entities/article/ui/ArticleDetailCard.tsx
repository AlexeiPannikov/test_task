import React from 'react';
import {Card, GET_CONTENT, getAttachmentSourceParent, GetContentRequest, GetContentResponse, H1} from "@/shared";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import 'moment/locale/ru'
import moment from "moment";
import EyeImg from "@/shared/assets/eye.svg"

const Article = styled.article`
  width: 100%;
  max-width: 825px;
  @media ${props => props.theme.media.extraSmall} {
    padding: 8px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const ParentImage = styled.img`
  width: 16px;
  height: 16px;
`

const PostDate = styled.time`
  margin-left: 16px;
  color: ${props => props.theme.colors.secondaryTextColor};
  font-size: 16px;
  white-space: nowrap;
  letter-spacing: 0;
  text-transform: lowercase;
`

const Title = styled(H1)`
  margin: 12px 0 0;
`

const ViewsCounter = styled.div<{beforeImage: string}>`
  margin-left: 32px;
  color: ${props => props.theme.colors.secondaryTextColor};
  font-size: 16px;
  position: relative;
  &:before {
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    top: 0;
    left: -20px;
    content: "";
    background: url(${props => props.beforeImage}) center top / contain no-repeat;
  }
`

const Intro = styled.h2`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  margin-top: 16px;
  margin-bottom: 24px;
  line-height: 28px;
  @media ${props => props.theme.media.extraSmall} {
    font-size: 18px;
  }
`

const MainImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
`

const MainText = styled.div`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 24px;
  p {
    margin-bottom: 15px;
  }
  @media ${props => props.theme.media.extraSmall} {
    font-size: 16px;
  }
`

export const ArticleDetailCard = () => {

    const {articleLink} = useParams()

    const {data} = useQuery<GetContentResponse, GetContentRequest>(
        GET_CONTENT,
        {
            variables: {full_url: articleLink}
        }
    )

    return (
        <Article>
            <Card>
                <Header>
                    <div>
                        {
                            getAttachmentSourceParent(data?.content.parents)
                            &&
                            <ParentImage
                                src={"https://i.simpalsmedia.com/point.md/logo/" + getAttachmentSourceParent(data?.content.parents)}
                            />
                        }
                    </div>
                    <PostDate>
                        {
                            data?.content.dates?.posted
                            &&
                            moment.unix(Number(data?.content.dates?.posted)).format("D MMMM YYYY H:mm")
                        }
                    </PostDate>
                    <ViewsCounter beforeImage={EyeImg}>
                        {data?.content.counters?.view}
                    </ViewsCounter>
                </Header>

                <Title dangerouslySetInnerHTML={{__html: data?.content.title?.long || ""}} />

                <Intro dangerouslySetInnerHTML={{__html: data?.content.description?.intro || ""}} />

                <MainImg
                    src={"https://i.simpalsmedia.com/point.md/news/600x315/" + data?.content?.thumbnail}
                />

                <MainText dangerouslySetInnerHTML={{__html: data?.content.description?.long || ""}} />
            </Card>
        </Article>
    );
};