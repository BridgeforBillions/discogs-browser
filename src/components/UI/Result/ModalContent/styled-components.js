import styled from 'styled-components'
import image_not_found from '../../../../assets/images/not_found_image.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 680px) {
    flex-direction: column;
    margin-left: 24px;
  }
`

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: auto;
  height: 100%;

  @media (max-width: 680px) {
    margin-bottom: 24px;
  }
`

export const ImageContainer = styled.div`
  position: sticky;
  top: 12px;
  width: 33vmax;
  height: 33vmax;
  max-width: 420px;
  max-height: 420px;
  min-width: 280px;
  min-height: 280px;
  margin-right: 12px;
`

export const StyledImage = styled.span`
  display: inline-block;
  position: relative;
  background-image: url(${image_not_found});
  background-size: 100% 100%;
  color: transparent;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-in-out;
`

export const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;
`

export const Header = styled.div`
  width: 100%;
`

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  max-width: 280px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Title = styled.h3`
  margin: 0;
  padding: 8px 0 0;
  font-size: 32px;
  line-height: 38px;
  word-wrap: break-word;
  letter-spacing: normal;
  color: inherit;
`

export const Community = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 3px 1ch 3px 0px;
  font-weight: 600;
  font-size: 1em;

  span {
    margin-right: 3px;
  }
`

export const Text = styled.div`
  padding: 6px 0;
  font-size: 16px;
  font-weight: 200;
  transition: all 200ms ease-in-out;
  
  span {
    font-weight: 600;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`

export const FadeIn = styled.div`
  animation: fade-in 200ms ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  margin: 6px 0;
  padding: 0;
  font-size: 16px;

  div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }

  span {
    color: #EDCE21;
    font-weight: bold;
    width: auto;
    height: 19px;
  }

  svg {
    display: block;
    color: #EDCE21;
    height: 48px;
    width: 48px;
    margin: 4px 0;
  }
`

export const YoutubeVideo = styled.div`
  margin: 12px 0;
`