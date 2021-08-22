import { requireNativeComponent, ViewStyle } from 'react-native';

type PascaluinpmtestProps = {
  color: string;
  style: ViewStyle;
};


export const PascaluinpmtestViewManager = requireNativeComponent<PascaluinpmtestProps>(
  'PascaluinpmtestView'
);

export default PascaluinpmtestViewManager;
