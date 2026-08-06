# `kinesisAccountSettings` Submodule <a name="`kinesisAccountSettings` Submodule" id="@cdktn/provider-aws.kinesisAccountSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAccountSettings <a name="KinesisAccountSettings" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

new kinesisAccountSettings.KinesisAccountSettings(scope: Construct, id: string, config?: KinesisAccountSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig">KinesisAccountSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig">KinesisAccountSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment">putMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment">resetMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMinimumThroughputBillingCommitment` <a name="putMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment"></a>

```typescript
public putMinimumThroughputBillingCommitment(value: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]

---

##### `resetMinimumThroughputBillingCommitment` <a name="resetMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment"></a>

```typescript
public resetMinimumThroughputBillingCommitment(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

kinesisAccountSettings.KinesisAccountSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

kinesisAccountSettings.KinesisAccountSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

kinesisAccountSettings.KinesisAccountSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisAccountSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisAccountSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisAccountSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment">minimumThroughputBillingCommitment</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput">minimumThroughputBillingCommitmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minimumThroughputBillingCommitment`<sup>Required</sup> <a name="minimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment"></a>

```typescript
public readonly minimumThroughputBillingCommitment: KinesisAccountSettingsMinimumThroughputBillingCommitmentList;
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a>

---

##### `minimumThroughputBillingCommitmentInput`<sup>Optional</sup> <a name="minimumThroughputBillingCommitmentInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput"></a>

```typescript
public readonly minimumThroughputBillingCommitmentInput: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAccountSettingsConfig <a name="KinesisAccountSettingsConfig" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.Initializer"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

const kinesisAccountSettingsConfig: kinesisAccountSettings.KinesisAccountSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment">minimumThroughputBillingCommitment</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]</code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `minimumThroughputBillingCommitment`<sup>Optional</sup> <a name="minimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment"></a>

```typescript
public readonly minimumThroughputBillingCommitment: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

### KinesisAccountSettingsMinimumThroughputBillingCommitment <a name="KinesisAccountSettingsMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.Initializer"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

const kinesisAccountSettingsMinimumThroughputBillingCommitment: kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAccountSettingsMinimumThroughputBillingCommitmentList <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentList" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

new kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get"></a>

```typescript
public get(index: number): KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>[]

---


### KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer"></a>

```typescript
import { kinesisAccountSettings } from '@cdktn/provider-aws'

new kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt">earliestAllowedEndAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt">endedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual">statusActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `earliestAllowedEndAt`<sup>Required</sup> <a name="earliestAllowedEndAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt"></a>

```typescript
public readonly earliestAllowedEndAt: string;
```

- *Type:* string

---

##### `endedAt`<sup>Required</sup> <a name="endedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt"></a>

```typescript
public readonly endedAt: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `statusActual`<sup>Required</sup> <a name="statusActual" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual"></a>

```typescript
public readonly statusActual: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>

---



