# `outpostsCapacityTask` Submodule <a name="`outpostsCapacityTask` Submodule" id="@cdktn/provider-aws.outpostsCapacityTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsCapacityTask <a name="OutpostsCapacityTask" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTask(scope: Construct, id: string, config: OutpostsCapacityTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool">putInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude">putInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool">resetInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude">resetInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId">resetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances">resetTaskActionOnBlockingInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstancePool` <a name="putInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool"></a>

```typescript
public putInstancePool(value: IResolvable | OutpostsCapacityTaskInstancePool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---

##### `putInstancesToExclude` <a name="putInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude"></a>

```typescript
public putInstancesToExclude(value: IResolvable | OutpostsCapacityTaskInstancesToExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts"></a>

```typescript
public putTimeouts(value: OutpostsCapacityTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `resetAssetId` <a name="resetAssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId"></a>

```typescript
public resetAssetId(): void
```

##### `resetInstancePool` <a name="resetInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool"></a>

```typescript
public resetInstancePool(): void
```

##### `resetInstancesToExclude` <a name="resetInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude"></a>

```typescript
public resetInstancesToExclude(): void
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId"></a>

```typescript
public resetOrderId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTaskActionOnBlockingInstances` <a name="resetTaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances"></a>

```typescript
public resetTaskActionOnBlockingInstances(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

outpostsCapacityTask.OutpostsCapacityTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OutpostsCapacityTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OutpostsCapacityTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsCapacityTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId">capacityTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate">completionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool">instancePool</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude">instancesToExclude</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput">instancePoolInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput">instancesToExcludeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput">orderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput">outpostIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput">taskActionOnBlockingInstancesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier">outpostIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances">taskActionOnBlockingInstances</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityTaskId`<sup>Required</sup> <a name="capacityTaskId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId"></a>

```typescript
public readonly capacityTaskId: string;
```

- *Type:* string

---

##### `completionDate`<sup>Required</sup> <a name="completionDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate"></a>

```typescript
public readonly completionDate: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `instancePool`<sup>Required</sup> <a name="instancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool"></a>

```typescript
public readonly instancePool: OutpostsCapacityTaskInstancePoolList;
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a>

---

##### `instancesToExclude`<sup>Required</sup> <a name="instancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude"></a>

```typescript
public readonly instancesToExclude: OutpostsCapacityTaskInstancesToExcludeList;
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts"></a>

```typescript
public readonly timeouts: OutpostsCapacityTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `instancePoolInput`<sup>Optional</sup> <a name="instancePoolInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput"></a>

```typescript
public readonly instancePoolInput: IResolvable | OutpostsCapacityTaskInstancePool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---

##### `instancesToExcludeInput`<sup>Optional</sup> <a name="instancesToExcludeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput"></a>

```typescript
public readonly instancesToExcludeInput: IResolvable | OutpostsCapacityTaskInstancesToExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: string;
```

- *Type:* string

---

##### `outpostIdentifierInput`<sup>Optional</sup> <a name="outpostIdentifierInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput"></a>

```typescript
public readonly outpostIdentifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `taskActionOnBlockingInstancesInput`<sup>Optional</sup> <a name="taskActionOnBlockingInstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput"></a>

```typescript
public readonly taskActionOnBlockingInstancesInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OutpostsCapacityTaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `outpostIdentifier`<sup>Required</sup> <a name="outpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier"></a>

```typescript
public readonly outpostIdentifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `taskActionOnBlockingInstances`<sup>Required</sup> <a name="taskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances"></a>

```typescript
public readonly taskActionOnBlockingInstances: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsCapacityTaskConfig <a name="OutpostsCapacityTaskConfig" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

const outpostsCapacityTaskConfig: outpostsCapacityTask.OutpostsCapacityTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier">outpostIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId">assetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool">instancePool</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude">instancesToExclude</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId">orderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances">taskActionOnBlockingInstances</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `outpostIdentifier`<sup>Required</sup> <a name="outpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier"></a>

```typescript
public readonly outpostIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `instancePool`<sup>Optional</sup> <a name="instancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool"></a>

```typescript
public readonly instancePool: IResolvable | OutpostsCapacityTaskInstancePool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `instancesToExclude`<sup>Optional</sup> <a name="instancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude"></a>

```typescript
public readonly instancesToExclude: IResolvable | OutpostsCapacityTaskInstancesToExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `taskActionOnBlockingInstances`<sup>Optional</sup> <a name="taskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances"></a>

```typescript
public readonly taskActionOnBlockingInstances: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OutpostsCapacityTaskTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

### OutpostsCapacityTaskInstancePool <a name="OutpostsCapacityTaskInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

const outpostsCapacityTaskInstancePool: outpostsCapacityTask.OutpostsCapacityTaskInstancePool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}.

---

### OutpostsCapacityTaskInstancesToExclude <a name="OutpostsCapacityTaskInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

const outpostsCapacityTaskInstancesToExclude: outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances">instances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}.

---

### OutpostsCapacityTaskTimeouts <a name="OutpostsCapacityTaskTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

const outpostsCapacityTaskTimeouts: outpostsCapacityTask.OutpostsCapacityTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsCapacityTaskInstancePoolList <a name="OutpostsCapacityTaskInstancePoolList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get"></a>

```typescript
public get(index: number): OutpostsCapacityTaskInstancePoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsCapacityTaskInstancePool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---


### OutpostsCapacityTaskInstancePoolOutputReference <a name="OutpostsCapacityTaskInstancePoolOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsCapacityTaskInstancePool;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>

---


### OutpostsCapacityTaskInstancesToExcludeList <a name="OutpostsCapacityTaskInstancesToExcludeList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get"></a>

```typescript
public get(index: number): OutpostsCapacityTaskInstancesToExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsCapacityTaskInstancesToExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---


### OutpostsCapacityTaskInstancesToExcludeOutputReference <a name="OutpostsCapacityTaskInstancesToExcludeOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsCapacityTaskInstancesToExclude;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>

---


### OutpostsCapacityTaskTimeoutsOutputReference <a name="OutpostsCapacityTaskTimeoutsOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { outpostsCapacityTask } from '@cdktn/provider-aws'

new outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsCapacityTaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---



