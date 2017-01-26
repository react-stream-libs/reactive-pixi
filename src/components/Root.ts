import { BaseBlueprint } from '../types/BaseBlueprint';
import { BaseChildable } from '../types/BaseChildable';
import { BasePropsType } from '../types/BasePropsType';
import { createComponent } from './createComponent';

export type _RootPropsType = {

} & BasePropsType;



export class RootChildable extends BaseChildable {

}

export class NoneChildable extends BaseChildable {
  _test: boolean;
}
export class _Root extends BaseBlueprint {

}
export class _None extends BaseBlueprint {
  test: boolean;
}

export const Root = createComponent<_Root, _None, _RootPropsType>(_Root);

export type _CirclePropsType = {

} & BasePropsType;
export type _CircleParentTypes = _Root;
export class _Circle extends BaseBlueprint {
  _circle: boolean;
}

export const Circle = createComponent<_Circle, _CircleParentTypes, _CirclePropsType>(_Circle);

import { RenderableType } from '../types/Renderable';

export { RenderableType }

Root({
  key: '123',
}, [
  Circle({
    key: '1234',
  }, [])
]);

Circle({
  key: '123',
}, [
  Root({
    key: '123'
  }, [])
])