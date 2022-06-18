import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";
export interface IMainLayoutProps {
  children: React.ReactNode;
}

export interface IEmptyLayoutProps {
  children: React.ReactNode;
}

interface IAppLayoutProps {
  children: React.ReactNode;
}

export type TNextPageWithLayout = NextPage & {
  Layout?: (page: IAppLayoutProps) => ReactElement
}

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
