# `lambdaFunctionScalingConfig` Submodule <a name="`lambdaFunctionScalingConfig` Submodule" id="@cdktn/provider-aws.lambdaFunctionScalingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionScalingConfig <a name="LambdaFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config aws_lambda_function_scaling_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

new lambdaFunctionScalingConfig.LambdaFunctionScalingConfig(scope: Construct, id: string, config: LambdaFunctionScalingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig">LambdaFunctionScalingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig">LambdaFunctionScalingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig">putFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetFunctionScalingConfig">resetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFunctionScalingConfig` <a name="putFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig"></a>

```typescript
public putFunctionScalingConfig(value: IResolvable | LambdaFunctionScalingConfigFunctionScalingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdaFunctionScalingConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---

##### `resetFunctionScalingConfig` <a name="resetFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetFunctionScalingConfig"></a>

```typescript
public resetFunctionScalingConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaFunctionScalingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaFunctionScalingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaFunctionScalingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaFunctionScalingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunctionScalingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList">LambdaFunctionScalingConfigFunctionScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionState">functionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference">LambdaFunctionScalingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfigInput">functionScalingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionScalingConfig`<sup>Required</sup> <a name="functionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: LambdaFunctionScalingConfigFunctionScalingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList">LambdaFunctionScalingConfigFunctionScalingConfigList</a>

---

##### `functionState`<sup>Required</sup> <a name="functionState" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionState"></a>

```typescript
public readonly functionState: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaFunctionScalingConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference">LambdaFunctionScalingConfigTimeoutsOutputReference</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `functionScalingConfigInput`<sup>Optional</sup> <a name="functionScalingConfigInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfigInput"></a>

```typescript
public readonly functionScalingConfigInput: IResolvable | LambdaFunctionScalingConfigFunctionScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdaFunctionScalingConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionScalingConfigConfig <a name="LambdaFunctionScalingConfigConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

const lambdaFunctionScalingConfigConfig: lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionName">functionName</a></code> | <code>string</code> | Name or ARN of the Lambda function. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Qualifier for the scaling configuration. Valid values: $LATEST.PUBLISHED or a numeric version number. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionScalingConfig">functionScalingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | function_scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name or ARN of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#function_name LambdaFunctionScalingConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Qualifier for the scaling configuration. Valid values: $LATEST.PUBLISHED or a numeric version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#qualifier LambdaFunctionScalingConfig#qualifier}

---

##### `functionScalingConfig`<sup>Optional</sup> <a name="functionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: IResolvable | LambdaFunctionScalingConfigFunctionScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

function_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#function_scaling_config LambdaFunctionScalingConfig#function_scaling_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#region LambdaFunctionScalingConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaFunctionScalingConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#timeouts LambdaFunctionScalingConfig#timeouts}

---

### LambdaFunctionScalingConfigFunctionScalingConfig <a name="LambdaFunctionScalingConfigFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

const lambdaFunctionScalingConfigFunctionScalingConfig: lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | Maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | Minimum number of execution environments to maintain for the function. |

---

##### `maxExecutionEnvironments`<sup>Optional</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

Maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#max_execution_environments LambdaFunctionScalingConfig#max_execution_environments}

---

##### `minExecutionEnvironments`<sup>Optional</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

Minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#min_execution_environments LambdaFunctionScalingConfig#min_execution_environments}

---

### LambdaFunctionScalingConfigTimeouts <a name="LambdaFunctionScalingConfigTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

const lambdaFunctionScalingConfigTimeouts: lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#create LambdaFunctionScalingConfig#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#delete LambdaFunctionScalingConfig#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#update LambdaFunctionScalingConfig#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionScalingConfigFunctionScalingConfigList <a name="LambdaFunctionScalingConfigFunctionScalingConfigList" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

new lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get"></a>

```typescript
public get(index: number): LambdaFunctionScalingConfigFunctionScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionScalingConfigFunctionScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---


### LambdaFunctionScalingConfigFunctionScalingConfigOutputReference <a name="LambdaFunctionScalingConfigFunctionScalingConfigOutputReference" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

new lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">resetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">resetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxExecutionEnvironments` <a name="resetMaxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```typescript
public resetMaxExecutionEnvironments(): void
```

##### `resetMinExecutionEnvironments` <a name="resetMinExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```typescript
public resetMinExecutionEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">maxExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">minExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="maxExecutionEnvironmentsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```typescript
public readonly maxExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `minExecutionEnvironmentsInput`<sup>Optional</sup> <a name="minExecutionEnvironmentsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```typescript
public readonly minExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `maxExecutionEnvironments`<sup>Required</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

---

##### `minExecutionEnvironments`<sup>Required</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionScalingConfigFunctionScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>

---


### LambdaFunctionScalingConfigTimeoutsOutputReference <a name="LambdaFunctionScalingConfigTimeoutsOutputReference" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdaFunctionScalingConfig } from '@cdktn/provider-aws'

new lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionScalingConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---



