import * as React from 'react';
import Animated, {AnimatedProps} from 'react-native-reanimated';

export function createAnimatedComponent<P extends object>(
  FunctionalComponent: React.FunctionComponent<P>,
): React.ComponentClass<AnimatedProps<P>> {
  class AnimatedAdapter extends React.Component<P> {
    render() {
      return <FunctionalComponent {...this.props} />;
    }
  }

  return Animated.createAnimatedComponent<P>(AnimatedAdapter);
}
