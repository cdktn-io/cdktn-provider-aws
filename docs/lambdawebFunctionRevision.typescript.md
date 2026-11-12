# `lambdawebFunctionRevision` Submodule <a name="`lambdawebFunctionRevision` Submodule" id="@cdktn/provider-aws.lambdawebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionRevision <a name="LambdawebFunctionRevision" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision aws_lambdaweb_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevision(scope: Construct, id: string, config: LambdawebFunctionRevisionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig">LambdawebFunctionRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig">LambdawebFunctionRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig"></a>

```typescript
public putBuildConfig(value: IResolvable | LambdawebFunctionRevisionBuildConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig"></a>

```typescript
public putServiceConfig(value: IResolvable | LambdawebFunctionRevisionServiceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdawebFunctionRevisionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig"></a>

```typescript
public resetBuildConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig"></a>

```typescript
public resetServiceConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdawebFunctionRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdawebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput">buildConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput">serviceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig"></a>

```typescript
public readonly buildConfig: LambdawebFunctionRevisionBuildConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a>

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: LambdawebFunctionRevisionServiceConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts"></a>

```typescript
public readonly timeouts: LambdawebFunctionRevisionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a>

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput"></a>

```typescript
public readonly buildConfigInput: IResolvable | LambdawebFunctionRevisionBuildConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput"></a>

```typescript
public readonly serviceConfigInput: IResolvable | LambdawebFunctionRevisionServiceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdawebFunctionRevisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionRevisionBuildConfig <a name="LambdawebFunctionRevisionBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionBuildConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig">codeConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]</code> | code_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig">runtimeConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]</code> | runtime_config block. |

---

##### `codeConfig`<sup>Optional</sup> <a name="codeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig"></a>

```typescript
public readonly codeConfig: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]

code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#code_config LambdawebFunctionRevision#code_config}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime_config LambdawebFunctionRevision#runtime_config}

---

### LambdawebFunctionRevisionBuildConfigCodeConfig <a name="LambdawebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionBuildConfigCodeConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3Object</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]</code> | s3_object block. |

---

##### `s3Object`<sup>Optional</sup> <a name="s3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```typescript
public readonly s3Object: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]

s3_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#s3_object LambdawebFunctionRevision#s3_object}

---

### LambdawebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionBuildConfigCodeConfigS3Object: lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}.

---

### LambdawebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionBuildConfigRuntimeConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}.

---

### LambdawebFunctionRevisionConfig <a name="LambdawebFunctionRevisionConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig">buildConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]</code> | build_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig">serviceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]</code> | service_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig"></a>

```typescript
public readonly buildConfig: IResolvable | LambdawebFunctionRevisionBuildConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: IResolvable | LambdawebFunctionRevisionServiceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdawebFunctionRevisionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}

---

### LambdawebFunctionRevisionServiceConfig <a name="LambdawebFunctionRevisionServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionServiceConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn">egressNetworkConnectorArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]</code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}. |

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}.

---

##### `egressNetworkConnectorArn`<sup>Optional</sup> <a name="egressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn"></a>

```typescript
public readonly egressNetworkConnectorArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}.

---

##### `maxConcurrencyPerEnvironment`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```typescript
public readonly maxConcurrencyPerEnvironment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}.

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#telemetry_config LambdawebFunctionRevision#telemetry_config}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}.

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionServiceConfigTelemetryConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">loggingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]</code> | logging_config block. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#logging_config LambdawebFunctionRevision#logging_config}

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfigActual <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionServiceConfigTelemetryConfigActual: lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual = { ... }
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig = { ... }
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig: lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}. |

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}.

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}.

---

### LambdawebFunctionRevisionTimeouts <a name="LambdawebFunctionRevisionTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

const lambdawebFunctionRevisionTimeouts: lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#create LambdawebFunctionRevision#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionRevisionBuildConfigCodeConfigList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]

---


### LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">putS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object">resetS3Object</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Object` <a name="putS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```typescript
public putS3Object(value: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]

---

##### `resetS3Object` <a name="resetS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object"></a>

```typescript
public resetS3Object(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3ObjectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```typescript
public readonly s3Object: LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a>

---

##### `s3ObjectInput`<sup>Optional</sup> <a name="s3ObjectInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```typescript
public readonly s3ObjectInput: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>[]

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdawebFunctionRevisionBuildConfigList <a name="LambdawebFunctionRevisionBuildConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionBuildConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>[]

---


### LambdawebFunctionRevisionBuildConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig">putCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig">resetCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfig` <a name="putCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```typescript
public putCodeConfig(value: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]

---

##### `resetCodeConfig` <a name="resetCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig"></a>

```typescript
public resetCodeConfig(): void
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig"></a>

```typescript
public resetRuntimeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">codeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```typescript
public readonly codeConfig: LambdawebFunctionRevisionBuildConfigCodeConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: LambdawebFunctionRevisionBuildConfigRuntimeConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a>

---

##### `codeConfigInput`<sup>Optional</sup> <a name="codeConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```typescript
public readonly codeConfigInput: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>[]

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigList <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>[]

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdawebFunctionRevisionServiceConfigList <a name="LambdawebFunctionRevisionServiceConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionServiceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>[]

---


### LambdawebFunctionRevisionServiceConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn">resetEgressNetworkConnectorArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">resetMaxConcurrencyPerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```typescript
public putTelemetryConfig(value: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]

---

##### `resetEgressNetworkConnectorArn` <a name="resetEgressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn"></a>

```typescript
public resetEgressNetworkConnectorArn(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaxConcurrencyPerEnvironment` <a name="resetMaxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```typescript
public resetMaxConcurrencyPerEnvironment(): void
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```typescript
public resetTelemetryConfig(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual">telemetryConfigActual</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput">egressNetworkConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">maxConcurrencyPerEnvironmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn">egressNetworkConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: LambdawebFunctionRevisionServiceConfigTelemetryConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a>

---

##### `telemetryConfigActual`<sup>Required</sup> <a name="telemetryConfigActual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual"></a>

```typescript
public readonly telemetryConfigActual: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a>

---

##### `egressNetworkConnectorArnInput`<sup>Optional</sup> <a name="egressNetworkConnectorArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput"></a>

```typescript
public readonly egressNetworkConnectorArnInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `maxConcurrencyPerEnvironmentInput`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironmentInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```typescript
public readonly maxConcurrencyPerEnvironmentInput: number;
```

- *Type:* number

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```typescript
public readonly telemetryConfigInput: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `egressNetworkConnectorArn`<sup>Required</sup> <a name="egressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn"></a>

```typescript
public readonly egressNetworkConnectorArn: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `maxConcurrencyPerEnvironment`<sup>Required</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```typescript
public readonly maxConcurrencyPerEnvironment: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdawebFunctionRevisionServiceConfigTelemetryConfigActual;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>[]

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">resetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationLogLevel` <a name="resetApplicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```typescript
public resetApplicationLogLevel(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```typescript
public resetSystemLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">applicationLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevelInput`<sup>Optional</sup> <a name="applicationLogLevelInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```typescript
public readonly applicationLogLevelInput: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```typescript
public readonly systemLogLevelInput: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>

---


### LambdawebFunctionRevisionTimeoutsOutputReference <a name="LambdawebFunctionRevisionTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionRevision } from '@cdktn/provider-aws'

new lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionRevisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---



