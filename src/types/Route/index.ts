import {ParamListBase, RouteProp} from '@react-navigation/native';

export type RouteParams<T> = {params: T} & RouteProp<ParamListBase, string>;

export type CarViewRouteParams = {carID: number; make: string; model: string};
