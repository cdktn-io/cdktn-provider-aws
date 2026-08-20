# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktn/provider-aws.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktn/provider-aws.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator aws_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicator(scope: Construct, id: string, config: MskReplicatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList">putReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mskReplicator.MskReplicator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskReplicator.MskReplicator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mskReplicator.MskReplicator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster"></a>

```typescript
public putKafkaCluster(value: IResolvable | MskReplicatorKafkaCluster[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery"></a>

```typescript
public putLogDelivery(value: MskReplicatorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `putReplicationInfoList` <a name="putReplicationInfoList" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```typescript
public putReplicationInfoList(value: MskReplicatorReplicationInfoListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts"></a>

```typescript
public putTimeouts(value: MskReplicatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetLogDelivery"></a>

```typescript
public resetLogDelivery(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

mskReplicator.MskReplicator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

mskReplicator.MskReplicator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

mskReplicator.MskReplicator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

mskReplicator.MskReplicator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDeliveryInput">logDeliveryInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput">replicationInfoListInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput">replicatorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorName">replicatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: MskReplicatorKafkaClusterList;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskReplicatorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a>

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```typescript
public readonly replicationInfoList: MskReplicatorReplicationInfoListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeouts"></a>

```typescript
public readonly timeouts: MskReplicatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput"></a>

```typescript
public readonly kafkaClusterInput: IResolvable | MskReplicatorKafkaCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDeliveryInput"></a>

```typescript
public readonly logDeliveryInput: MskReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationInfoListInput`<sup>Optional</sup> <a name="replicationInfoListInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```typescript
public readonly replicationInfoListInput: MskReplicatorReplicationInfoListStruct;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---

##### `replicatorNameInput`<sup>Optional</sup> <a name="replicatorNameInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```typescript
public readonly replicatorNameInput: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MskReplicatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorConfig: mskReplicator.MskReplicatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]</code> | kafka_cluster block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | replication_info_list block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName">replicatorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#description MskReplicator#description}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#id MskReplicator#id}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#tags MskReplicator#tags}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: IResolvable | MskReplicatorKafkaCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]

kafka_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```typescript
public readonly replicationInfoList: MskReplicatorReplicationInfoListStruct;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

replication_info_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}.

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#description MskReplicator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#id MskReplicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#region MskReplicator#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#tags MskReplicator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MskReplicatorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}

---

### MskReplicatorKafkaCluster <a name="MskReplicatorKafkaCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorKafkaCluster: mskReplicator.MskReplicatorKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | amazon_msk_cluster block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | vpc_config block. |

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster"></a>

```typescript
public readonly amazonMskCluster: MskReplicatorKafkaClusterAmazonMskCluster;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

amazon_msk_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: MskReplicatorKafkaClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClusterAmazonMskCluster <a name="MskReplicatorKafkaClusterAmazonMskCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorKafkaClusterAmazonMskCluster: mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn">mskClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}. |

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn"></a>

```typescript
public readonly mskClusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}.

---

### MskReplicatorKafkaClusterVpcConfig <a name="MskReplicatorKafkaClusterVpcConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorKafkaClusterVpcConfig: mskReplicator.MskReplicatorKafkaClusterVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}.

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}.

---

### MskReplicatorLogDelivery <a name="MskReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorLogDelivery: mskReplicator.MskReplicatorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | replicator_log_delivery block. |

---

##### `replicatorLogDelivery`<sup>Optional</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery"></a>

```typescript
public readonly replicatorLogDelivery: MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

replicator_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

### MskReplicatorLogDeliveryReplicatorLogDelivery <a name="MskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorLogDeliveryReplicatorLogDelivery: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | s3 block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose"></a>

```typescript
public readonly firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3"></a>

```typescript
public readonly s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}.

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorLogDeliveryReplicatorLogDeliveryFirehose: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}.

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorLogDeliveryReplicatorLogDeliveryS3: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}.

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorReplicationInfoListConsumerGroupReplication: mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_group_offset_sync_mode MskReplicator#consumer_group_offset_sync_mode}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}. |

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```typescript
public readonly consumerGroupsToReplicate: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}.

---

##### `consumerGroupOffsetSyncMode`<sup>Optional</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode"></a>

```typescript
public readonly consumerGroupOffsetSyncMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_group_offset_sync_mode MskReplicator#consumer_group_offset_sync_mode}.

---

##### `consumerGroupsToExclude`<sup>Optional</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```typescript
public readonly consumerGroupsToExclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}.

---

##### `detectAndCopyNewConsumerGroups`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```typescript
public readonly detectAndCopyNewConsumerGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}.

---

##### `synchroniseConsumerGroupOffsets`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```typescript
public readonly synchroniseConsumerGroupOffsets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}.

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorReplicationInfoListStruct: mskReplicator.MskReplicatorReplicationInfoListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]</code> | consumer_group_replication block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">targetCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">topicReplication</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]</code> | topic_replication block. |

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```typescript
public readonly consumerGroupReplication: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]

consumer_group_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```typescript
public readonly sourceKafkaClusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}.

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```typescript
public readonly targetCompressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}.

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```typescript
public readonly targetKafkaClusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}.

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```typescript
public readonly topicReplication: IResolvable | MskReplicatorReplicationInfoListTopicReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]

topic_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorReplicationInfoListTopicReplication: mskReplicator.MskReplicatorReplicationInfoListTopicReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">topicsToReplicate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | starting_position block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | topic_name_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">topicsToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}. |

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```typescript
public readonly topicsToReplicate: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}.

---

##### `copyAccessControlListsForTopics`<sup>Optional</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```typescript
public readonly copyAccessControlListsForTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}.

---

##### `copyTopicConfigurations`<sup>Optional</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```typescript
public readonly copyTopicConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}.

---

##### `detectAndCopyNewTopics`<sup>Optional</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```typescript
public readonly detectAndCopyNewTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}.

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition"></a>

```typescript
public readonly startingPosition: MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

starting_position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}

---

##### `topicNameConfiguration`<sup>Optional</sup> <a name="topicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration"></a>

```typescript
public readonly topicNameConfiguration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

topic_name_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}

---

##### `topicsToExclude`<sup>Optional</sup> <a name="topicsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```typescript
public readonly topicsToExclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}.

---

### MskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorReplicationInfoListTopicReplicationStartingPosition: mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#type MskReplicator#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration: mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#type MskReplicator#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

### MskReplicatorTimeouts <a name="MskReplicatorTimeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

const mskReplicatorTimeouts: mskReplicator.MskReplicatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#create MskReplicator#create}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#delete MskReplicator#delete}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#update MskReplicator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#create MskReplicator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#delete MskReplicator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/msk_replicator#update MskReplicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClusterAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClusterAmazonMskClusterOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput">mskClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn">mskClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mskClusterArnInput`<sup>Optional</sup> <a name="mskClusterArnInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```typescript
public readonly mskClusterArnInput: string;
```

- *Type:* string

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```typescript
public readonly mskClusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorKafkaClusterAmazonMskCluster;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---


### MskReplicatorKafkaClusterList <a name="MskReplicatorKafkaClusterList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorKafkaClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get"></a>

```typescript
public get(index: number): MskReplicatorKafkaClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>[]

---


### MskReplicatorKafkaClusterOutputReference <a name="MskReplicatorKafkaClusterOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster">putAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonMskCluster` <a name="putAmazonMskCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster"></a>

```typescript
public putAmazonMskCluster(value: MskReplicatorKafkaClusterAmazonMskCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: MskReplicatorKafkaClusterVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput">amazonMskClusterInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster"></a>

```typescript
public readonly amazonMskCluster: MskReplicatorKafkaClusterAmazonMskClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: MskReplicatorKafkaClusterVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a>

---

##### `amazonMskClusterInput`<sup>Optional</sup> <a name="amazonMskClusterInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput"></a>

```typescript
public readonly amazonMskClusterInput: MskReplicatorKafkaClusterAmazonMskCluster;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: MskReplicatorKafkaClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>

---


### MskReplicatorKafkaClusterVpcConfigOutputReference <a name="MskReplicatorKafkaClusterVpcConfigOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds"></a>

```typescript
public resetSecurityGroupsIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput"></a>

```typescript
public readonly securityGroupsIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorKafkaClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---


### MskReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery">putReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery">resetReplicatorLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicatorLogDelivery` <a name="putReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery"></a>

```typescript
public putReplicatorLogDelivery(value: MskReplicatorLogDeliveryReplicatorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `resetReplicatorLogDelivery` <a name="resetReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery"></a>

```typescript
public resetReplicatorLogDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput">replicatorLogDeliveryInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicatorLogDelivery`<sup>Required</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```typescript
public readonly replicatorLogDelivery: MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `replicatorLogDeliveryInput`<sup>Optional</sup> <a name="replicatorLogDeliveryInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput"></a>

```typescript
public readonly replicatorLogDeliveryInput: MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3"></a>

```typescript
public putS3(value: MskReplicatorLogDeliveryReplicatorLogDeliveryS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```typescript
public readonly firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationList <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get"></a>

```typescript
public get(index: number): MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode">resetConsumerGroupOffsetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">resetConsumerGroupsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">resetDetectAndCopyNewConsumerGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">resetSynchroniseConsumerGroupOffsets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupOffsetSyncMode` <a name="resetConsumerGroupOffsetSyncMode" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode"></a>

```typescript
public resetConsumerGroupOffsetSyncMode(): void
```

##### `resetConsumerGroupsToExclude` <a name="resetConsumerGroupsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```typescript
public resetConsumerGroupsToExclude(): void
```

##### `resetDetectAndCopyNewConsumerGroups` <a name="resetDetectAndCopyNewConsumerGroups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```typescript
public resetDetectAndCopyNewConsumerGroups(): void
```

##### `resetSynchroniseConsumerGroupOffsets` <a name="resetSynchroniseConsumerGroupOffsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```typescript
public resetSynchroniseConsumerGroupOffsets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput">consumerGroupOffsetSyncModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">consumerGroupsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">consumerGroupsToReplicateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">detectAndCopyNewConsumerGroupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">synchroniseConsumerGroupOffsetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupOffsetSyncModeInput`<sup>Optional</sup> <a name="consumerGroupOffsetSyncModeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput"></a>

```typescript
public readonly consumerGroupOffsetSyncModeInput: string;
```

- *Type:* string

---

##### `consumerGroupsToExcludeInput`<sup>Optional</sup> <a name="consumerGroupsToExcludeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```typescript
public readonly consumerGroupsToExcludeInput: string[];
```

- *Type:* string[]

---

##### `consumerGroupsToReplicateInput`<sup>Optional</sup> <a name="consumerGroupsToReplicateInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```typescript
public readonly consumerGroupsToReplicateInput: string[];
```

- *Type:* string[]

---

##### `detectAndCopyNewConsumerGroupsInput`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroupsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```typescript
public readonly detectAndCopyNewConsumerGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsetsInput`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsetsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```typescript
public readonly synchroniseConsumerGroupOffsetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `consumerGroupOffsetSyncMode`<sup>Required</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode"></a>

```typescript
public readonly consumerGroupOffsetSyncMode: string;
```

- *Type:* string

---

##### `consumerGroupsToExclude`<sup>Required</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```typescript
public readonly consumerGroupsToExclude: string[];
```

- *Type:* string[]

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```typescript
public readonly consumerGroupsToReplicate: string[];
```

- *Type:* string[]

---

##### `detectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```typescript
public readonly detectAndCopyNewConsumerGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```typescript
public readonly synchroniseConsumerGroupOffsets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">putConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">putTopicReplication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerGroupReplication` <a name="putConsumerGroupReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```typescript
public putConsumerGroupReplication(value: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]

---

##### `putTopicReplication` <a name="putTopicReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```typescript
public putTopicReplication(value: IResolvable | MskReplicatorReplicationInfoListTopicReplication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias">sourceKafkaClusterAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias">targetKafkaClusterAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">consumerGroupReplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">sourceKafkaClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">targetCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">targetKafkaClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">topicReplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">targetCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```typescript
public readonly consumerGroupReplication: MskReplicatorReplicationInfoListConsumerGroupReplicationList;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a>

---

##### `sourceKafkaClusterAlias`<sup>Required</sup> <a name="sourceKafkaClusterAlias" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias"></a>

```typescript
public readonly sourceKafkaClusterAlias: string;
```

- *Type:* string

---

##### `targetKafkaClusterAlias`<sup>Required</sup> <a name="targetKafkaClusterAlias" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias"></a>

```typescript
public readonly targetKafkaClusterAlias: string;
```

- *Type:* string

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```typescript
public readonly topicReplication: MskReplicatorReplicationInfoListTopicReplicationList;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a>

---

##### `consumerGroupReplicationInput`<sup>Optional</sup> <a name="consumerGroupReplicationInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```typescript
public readonly consumerGroupReplicationInput: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>[]

---

##### `sourceKafkaClusterArnInput`<sup>Optional</sup> <a name="sourceKafkaClusterArnInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```typescript
public readonly sourceKafkaClusterArnInput: string;
```

- *Type:* string

---

##### `targetCompressionTypeInput`<sup>Optional</sup> <a name="targetCompressionTypeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```typescript
public readonly targetCompressionTypeInput: string;
```

- *Type:* string

---

##### `targetKafkaClusterArnInput`<sup>Optional</sup> <a name="targetKafkaClusterArnInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```typescript
public readonly targetKafkaClusterArnInput: string;
```

- *Type:* string

---

##### `topicReplicationInput`<sup>Optional</sup> <a name="topicReplicationInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```typescript
public readonly topicReplicationInput: IResolvable | MskReplicatorReplicationInfoListTopicReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```typescript
public readonly sourceKafkaClusterArn: string;
```

- *Type:* string

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```typescript
public readonly targetCompressionType: string;
```

- *Type:* string

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```typescript
public readonly targetKafkaClusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorReplicationInfoListStruct;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---


### MskReplicatorReplicationInfoListTopicReplicationList <a name="MskReplicatorReplicationInfoListTopicReplicationList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get"></a>

```typescript
public get(index: number): MskReplicatorReplicationInfoListTopicReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListTopicReplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>[]

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition">putStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration">putTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">resetCopyAccessControlListsForTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">resetCopyTopicConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">resetDetectAndCopyNewTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration">resetTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">resetTopicsToExclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartingPosition` <a name="putStartingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition"></a>

```typescript
public putStartingPosition(value: MskReplicatorReplicationInfoListTopicReplicationStartingPosition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `putTopicNameConfiguration` <a name="putTopicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration"></a>

```typescript
public putTopicNameConfiguration(value: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `resetCopyAccessControlListsForTopics` <a name="resetCopyAccessControlListsForTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```typescript
public resetCopyAccessControlListsForTopics(): void
```

##### `resetCopyTopicConfigurations` <a name="resetCopyTopicConfigurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```typescript
public resetCopyTopicConfigurations(): void
```

##### `resetDetectAndCopyNewTopics` <a name="resetDetectAndCopyNewTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```typescript
public resetDetectAndCopyNewTopics(): void
```

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition"></a>

```typescript
public resetStartingPosition(): void
```

##### `resetTopicNameConfiguration` <a name="resetTopicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration"></a>

```typescript
public resetTopicNameConfiguration(): void
```

##### `resetTopicsToExclude` <a name="resetTopicsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```typescript
public resetTopicsToExclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">copyAccessControlListsForTopicsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">copyTopicConfigurationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">detectAndCopyNewTopicsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput">startingPositionInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput">topicNameConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">topicsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">topicsToReplicateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">topicsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">topicsToReplicate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```typescript
public readonly startingPosition: MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `topicNameConfiguration`<sup>Required</sup> <a name="topicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```typescript
public readonly topicNameConfiguration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `copyAccessControlListsForTopicsInput`<sup>Optional</sup> <a name="copyAccessControlListsForTopicsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```typescript
public readonly copyAccessControlListsForTopicsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTopicConfigurationsInput`<sup>Optional</sup> <a name="copyTopicConfigurationsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```typescript
public readonly copyTopicConfigurationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectAndCopyNewTopicsInput`<sup>Optional</sup> <a name="detectAndCopyNewTopicsInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```typescript
public readonly detectAndCopyNewTopicsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput"></a>

```typescript
public readonly startingPositionInput: MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `topicNameConfigurationInput`<sup>Optional</sup> <a name="topicNameConfigurationInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput"></a>

```typescript
public readonly topicNameConfigurationInput: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `topicsToExcludeInput`<sup>Optional</sup> <a name="topicsToExcludeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```typescript
public readonly topicsToExcludeInput: string[];
```

- *Type:* string[]

---

##### `topicsToReplicateInput`<sup>Optional</sup> <a name="topicsToReplicateInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```typescript
public readonly topicsToReplicateInput: string[];
```

- *Type:* string[]

---

##### `copyAccessControlListsForTopics`<sup>Required</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```typescript
public readonly copyAccessControlListsForTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTopicConfigurations`<sup>Required</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```typescript
public readonly copyTopicConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectAndCopyNewTopics`<sup>Required</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```typescript
public readonly detectAndCopyNewTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `topicsToExclude`<sup>Required</sup> <a name="topicsToExclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```typescript
public readonly topicsToExclude: string[];
```

- *Type:* string[]

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```typescript
public readonly topicsToReplicate: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListTopicReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---


### MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---


### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---


### MskReplicatorTimeoutsOutputReference <a name="MskReplicatorTimeoutsOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-aws'

new mskReplicator.MskReplicatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---



