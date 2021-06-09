import {createContext} from 'react'
import {Devices} from '../Api'

export const LoginContext = createContext<any>(false);

export const ModeDataContext = createContext<any>([]);