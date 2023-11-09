import React, {ForwardedRef, useEffect, useRef} from "react";
import styled from "styled-components";

interface IArgs {
    onIntersecting: () => any | Promise<any>
}

export const useObserver = ({onIntersecting}: IArgs) => {
    const observerTarget = useRef(null);

    let isFirstLoading = true

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry && entry.isIntersecting && !isFirstLoading) {
                    onIntersecting();
                }
                isFirstLoading = false
            },
            {threshold: 1}
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, []);

    return {observerTarget}
}

const ObserverInner = styled.div`
  height: 80px;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0;
`

const ObserverWrap = styled.div`
  height: 0;
  width: 100%;
  display: block;
  visibility: hidden;
  position: relative;
`

export const Observer = React.forwardRef((props, ref) => {
    return (
        <ObserverWrap ref={ref as ForwardedRef<any>}>
            <ObserverInner/>
        </ObserverWrap>
    )
})