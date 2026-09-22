# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-aws.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider aws_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProvider(scope: Construct, id: string, config: DmsDataProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual">resetVirtual</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings"></a>

```typescript
public putSettings(value: IResolvable | DmsDataProviderSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtual` <a name="resetVirtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual"></a>

```typescript
public resetVirtual(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

dmsDataProvider.DmsDataProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

dmsDataProvider.DmsDataProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

dmsDataProvider.DmsDataProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

dmsDataProvider.DmsDataProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput">virtualInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual">virtual</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings"></a>

```typescript
public readonly settings: DmsDataProviderSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | DmsDataProviderSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualInput`<sup>Optional</sup> <a name="virtualInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput"></a>

```typescript
public readonly virtualInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtual`<sup>Required</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual"></a>

```typescript
public readonly virtual: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderConfig: dmsDataProvider.DmsDataProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual">virtual</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | DmsDataProviderSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `virtual`<sup>Optional</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual"></a>

```typescript
public readonly virtual: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettings: dmsDataProvider.DmsDataProviderSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">docDbSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | doc_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">ibmDb2LuwSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | ibm_db2_luw_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings">ibmDb2ZosSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | ibm_db2_zos_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">mariaDbSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | maria_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | microsoft_sql_server_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">mongoDbSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | mongo_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings">mysqlSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">oracleSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings">postgresqlSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | postgresql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">redshiftSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">sybaseAseSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | sybase_ase_settings block. |

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DmsDataProviderSettingsDocDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

doc_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `ibmDb2LuwSettings`<sup>Optional</sup> <a name="ibmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```typescript
public readonly ibmDb2LuwSettings: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

ibm_db2_luw_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}

---

##### `ibmDb2ZosSettings`<sup>Optional</sup> <a name="ibmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings"></a>

```typescript
public readonly ibmDb2ZosSettings: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

ibm_db2_zos_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}

---

##### `mariaDbSettings`<sup>Optional</sup> <a name="mariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```typescript
public readonly mariaDbSettings: IResolvable | DmsDataProviderSettingsMariaDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

maria_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

microsoft_sql_server_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | DmsDataProviderSettingsMongoDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

mongo_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `mysqlSettings`<sup>Optional</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings"></a>

```typescript
public readonly mysqlSettings: IResolvable | DmsDataProviderSettingsMysqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | DmsDataProviderSettingsOracleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `postgresqlSettings`<sup>Optional</sup> <a name="postgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings"></a>

```typescript
public readonly postgresqlSettings: IResolvable | DmsDataProviderSettingsPostgresqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

postgresql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | DmsDataProviderSettingsRedshiftSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `sybaseAseSettings`<sup>Optional</sup> <a name="sybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```typescript
public readonly sybaseAseSettings: IResolvable | DmsDataProviderSettingsSybaseAseSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

sybase_ase_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsDocDbSettings: dmsDataProvider.DmsDataProviderSettingsDocDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsIbmDb2LuwSettings: dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism">securityMechanism</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `securityMechanism`<sup>Optional</sup> <a name="securityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism"></a>

```typescript
public readonly securityMechanism: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZosSettings <a name="DmsDataProviderSettingsIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsIbmDb2ZosSettings: dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsMariaDbSettings: dmsDataProvider.DmsDataProviderSettingsMariaDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsMicrosoftSqlServerSettings: dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsMongoDbSettings: dmsDataProvider.DmsDataProviderSettingsMongoDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">authMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">authSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMysqlSettings <a name="DmsDataProviderSettingsMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsMysqlSettings: dmsDataProvider.DmsDataProviderSettingsMysqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsOracleSettings: dmsDataProvider.DmsDataProviderSettingsOracleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">asmServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">secretsManagerSecurityDbEncryptionSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `asmServer`<sup>Optional</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```typescript
public readonly asmServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `secretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```typescript
public readonly secretsManagerOracleAsmSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `secretsManagerSecurityDbEncryptionSecretId`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgresqlSettings <a name="DmsDataProviderSettingsPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsPostgresqlSettings: dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsRedshiftSettings: dmsDataProvider.DmsDataProviderSettingsRedshiftSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path">s3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3AccessRoleArn`<sup>Optional</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3Path`<sup>Optional</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

const dmsDataProviderSettingsSybaseAseSettings: dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">encryptPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encryptPassword`<sup>Optional</sup> <a name="encryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```typescript
public readonly encryptPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsList <a name="DmsDataProviderSettingsDocDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsDocDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsDocDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---


### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsDocDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsList <a name="DmsDataProviderSettingsIbmDb2LuwSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism">resetSecurityMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetSecurityMechanism` <a name="resetSecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism"></a>

```typescript
public resetSecurityMechanism(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput">securityMechanismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism">securityMechanism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `securityMechanismInput`<sup>Optional</sup> <a name="securityMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput"></a>

```typescript
public readonly securityMechanismInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `securityMechanism`<sup>Required</sup> <a name="securityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism"></a>

```typescript
public readonly securityMechanism: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DmsDataProviderSettingsIbmDb2ZosSettingsList <a name="DmsDataProviderSettingsIbmDb2ZosSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---


### DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>

---


### DmsDataProviderSettingsList <a name="DmsDataProviderSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>[]

---


### DmsDataProviderSettingsMariaDbSettingsList <a name="DmsDataProviderSettingsMariaDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsMariaDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMariaDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMariaDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsList <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DmsDataProviderSettingsMongoDbSettingsList <a name="DmsDataProviderSettingsMongoDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsMongoDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMongoDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```typescript
public resetAuthMechanism(): void
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```typescript
public resetAuthSource(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```typescript
public readonly authMechanismInput: string;
```

- *Type:* string

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```typescript
public readonly authSourceInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMongoDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---


### DmsDataProviderSettingsMysqlSettingsList <a name="DmsDataProviderSettingsMysqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsMysqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMysqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---


### DmsDataProviderSettingsMysqlSettingsOutputReference <a name="DmsDataProviderSettingsMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsMysqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>

---


### DmsDataProviderSettingsOracleSettingsList <a name="DmsDataProviderSettingsOracleSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsOracleSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsOracleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsOracleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">resetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">resetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">resetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">resetSecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">resetSecretsManagerSecurityDbEncryptionSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAsmServer` <a name="resetAsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```typescript
public resetAsmServer(): void
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetSecretsManagerOracleAsmAccessRoleArn` <a name="resetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public resetSecretsManagerOracleAsmAccessRoleArn(): void
```

##### `resetSecretsManagerOracleAsmSecretId` <a name="resetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```typescript
public resetSecretsManagerOracleAsmSecretId(): void
```

##### `resetSecretsManagerSecurityDbEncryptionAccessRoleArn` <a name="resetSecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```typescript
public resetSecretsManagerSecurityDbEncryptionAccessRoleArn(): void
```

##### `resetSecretsManagerSecurityDbEncryptionSecretId` <a name="resetSecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```typescript
public resetSecretsManagerSecurityDbEncryptionSecretId(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">asmServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secretsManagerOracleAsmSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">secretsManagerSecurityDbEncryptionAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">secretsManagerSecurityDbEncryptionSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">secretsManagerSecurityDbEncryptionSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asmServerInput`<sup>Optional</sup> <a name="asmServerInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```typescript
public readonly asmServerInput: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```typescript
public readonly secretsManagerOracleAsmSecretIdInput: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecurityDbEncryptionSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionSecretIdInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```typescript
public readonly asmServer: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```typescript
public readonly secretsManagerOracleAsmSecretId: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionSecretId: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsOracleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">putDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">putIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings">putIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">putMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">putMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">putMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings">putMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">putOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings">putPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">putSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">resetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">resetIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings">resetIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">resetMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">resetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">resetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings">resetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">resetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings">resetPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">resetSybaseAseSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDocDbSettings` <a name="putDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```typescript
public putDocDbSettings(value: IResolvable | DmsDataProviderSettingsDocDbSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---

##### `putIbmDb2LuwSettings` <a name="putIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```typescript
public putIbmDb2LuwSettings(value: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---

##### `putIbmDb2ZosSettings` <a name="putIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings"></a>

```typescript
public putIbmDb2ZosSettings(value: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---

##### `putMariaDbSettings` <a name="putMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```typescript
public putMariaDbSettings(value: IResolvable | DmsDataProviderSettingsMariaDbSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---

##### `putMicrosoftSqlServerSettings` <a name="putMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```typescript
public putMicrosoftSqlServerSettings(value: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---

##### `putMongoDbSettings` <a name="putMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```typescript
public putMongoDbSettings(value: IResolvable | DmsDataProviderSettingsMongoDbSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---

##### `putMysqlSettings` <a name="putMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings"></a>

```typescript
public putMysqlSettings(value: IResolvable | DmsDataProviderSettingsMysqlSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---

##### `putOracleSettings` <a name="putOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```typescript
public putOracleSettings(value: IResolvable | DmsDataProviderSettingsOracleSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---

##### `putPostgresqlSettings` <a name="putPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings"></a>

```typescript
public putPostgresqlSettings(value: IResolvable | DmsDataProviderSettingsPostgresqlSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```typescript
public putRedshiftSettings(value: IResolvable | DmsDataProviderSettingsRedshiftSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---

##### `putSybaseAseSettings` <a name="putSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```typescript
public putSybaseAseSettings(value: IResolvable | DmsDataProviderSettingsSybaseAseSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---

##### `resetDocDbSettings` <a name="resetDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```typescript
public resetDocDbSettings(): void
```

##### `resetIbmDb2LuwSettings` <a name="resetIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```typescript
public resetIbmDb2LuwSettings(): void
```

##### `resetIbmDb2ZosSettings` <a name="resetIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings"></a>

```typescript
public resetIbmDb2ZosSettings(): void
```

##### `resetMariaDbSettings` <a name="resetMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```typescript
public resetMariaDbSettings(): void
```

##### `resetMicrosoftSqlServerSettings` <a name="resetMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```typescript
public resetMicrosoftSqlServerSettings(): void
```

##### `resetMongoDbSettings` <a name="resetMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```typescript
public resetMongoDbSettings(): void
```

##### `resetMysqlSettings` <a name="resetMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings"></a>

```typescript
public resetMysqlSettings(): void
```

##### `resetOracleSettings` <a name="resetOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```typescript
public resetOracleSettings(): void
```

##### `resetPostgresqlSettings` <a name="resetPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings"></a>

```typescript
public resetPostgresqlSettings(): void
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```typescript
public resetRedshiftSettings(): void
```

##### `resetSybaseAseSettings` <a name="resetSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```typescript
public resetSybaseAseSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">ibmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings">ibmDb2ZosSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">mariaDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings">mysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings">postgresqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">sybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">docDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">ibmDb2LuwSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput">ibmDb2ZosSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">mariaDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">microsoftSqlServerSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">mongoDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput">mysqlSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">oracleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput">postgresqlSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">sybaseAseSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: DmsDataProviderSettingsDocDbSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a>

---

##### `ibmDb2LuwSettings`<sup>Required</sup> <a name="ibmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```typescript
public readonly ibmDb2LuwSettings: DmsDataProviderSettingsIbmDb2LuwSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a>

---

##### `ibmDb2ZosSettings`<sup>Required</sup> <a name="ibmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings"></a>

```typescript
public readonly ibmDb2ZosSettings: DmsDataProviderSettingsIbmDb2ZosSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a>

---

##### `mariaDbSettings`<sup>Required</sup> <a name="mariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```typescript
public readonly mariaDbSettings: DmsDataProviderSettingsMariaDbSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a>

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: DmsDataProviderSettingsMicrosoftSqlServerSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: DmsDataProviderSettingsMongoDbSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a>

---

##### `mysqlSettings`<sup>Required</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings"></a>

```typescript
public readonly mysqlSettings: DmsDataProviderSettingsMysqlSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: DmsDataProviderSettingsOracleSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a>

---

##### `postgresqlSettings`<sup>Required</sup> <a name="postgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings"></a>

```typescript
public readonly postgresqlSettings: DmsDataProviderSettingsPostgresqlSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DmsDataProviderSettingsRedshiftSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a>

---

##### `sybaseAseSettings`<sup>Required</sup> <a name="sybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```typescript
public readonly sybaseAseSettings: DmsDataProviderSettingsSybaseAseSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a>

---

##### `docDbSettingsInput`<sup>Optional</sup> <a name="docDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```typescript
public readonly docDbSettingsInput: IResolvable | DmsDataProviderSettingsDocDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>[]

---

##### `ibmDb2LuwSettingsInput`<sup>Optional</sup> <a name="ibmDb2LuwSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```typescript
public readonly ibmDb2LuwSettingsInput: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>[]

---

##### `ibmDb2ZosSettingsInput`<sup>Optional</sup> <a name="ibmDb2ZosSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput"></a>

```typescript
public readonly ibmDb2ZosSettingsInput: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>[]

---

##### `mariaDbSettingsInput`<sup>Optional</sup> <a name="mariaDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```typescript
public readonly mariaDbSettingsInput: IResolvable | DmsDataProviderSettingsMariaDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>[]

---

##### `microsoftSqlServerSettingsInput`<sup>Optional</sup> <a name="microsoftSqlServerSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```typescript
public readonly microsoftSqlServerSettingsInput: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>[]

---

##### `mongoDbSettingsInput`<sup>Optional</sup> <a name="mongoDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```typescript
public readonly mongoDbSettingsInput: IResolvable | DmsDataProviderSettingsMongoDbSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>[]

---

##### `mysqlSettingsInput`<sup>Optional</sup> <a name="mysqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput"></a>

```typescript
public readonly mysqlSettingsInput: IResolvable | DmsDataProviderSettingsMysqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>[]

---

##### `oracleSettingsInput`<sup>Optional</sup> <a name="oracleSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```typescript
public readonly oracleSettingsInput: IResolvable | DmsDataProviderSettingsOracleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>[]

---

##### `postgresqlSettingsInput`<sup>Optional</sup> <a name="postgresqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput"></a>

```typescript
public readonly postgresqlSettingsInput: IResolvable | DmsDataProviderSettingsPostgresqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```typescript
public readonly redshiftSettingsInput: IResolvable | DmsDataProviderSettingsRedshiftSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---

##### `sybaseAseSettingsInput`<sup>Optional</sup> <a name="sybaseAseSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```typescript
public readonly sybaseAseSettingsInput: IResolvable | DmsDataProviderSettingsSybaseAseSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---


### DmsDataProviderSettingsPostgresqlSettingsList <a name="DmsDataProviderSettingsPostgresqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsPostgresqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsPostgresqlSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>[]

---


### DmsDataProviderSettingsPostgresqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgresqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsPostgresqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>

---


### DmsDataProviderSettingsRedshiftSettingsList <a name="DmsDataProviderSettingsRedshiftSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsRedshiftSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsRedshiftSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>[]

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn">resetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path">resetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3AccessRoleArn` <a name="resetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn"></a>

```typescript
public resetS3AccessRoleArn(): void
```

##### `resetS3Path` <a name="resetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path"></a>

```typescript
public resetS3Path(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput">s3AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput">s3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn">s3AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path">s3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3AccessRoleArnInput`<sup>Optional</sup> <a name="s3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```typescript
public readonly s3AccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3PathInput`<sup>Optional</sup> <a name="s3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput"></a>

```typescript
public readonly s3PathInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `s3AccessRoleArn`<sup>Required</sup> <a name="s3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn"></a>

```typescript
public readonly s3AccessRoleArn: string;
```

- *Type:* string

---

##### `s3Path`<sup>Required</sup> <a name="s3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path"></a>

```typescript
public readonly s3Path: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsRedshiftSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---


### DmsDataProviderSettingsSybaseAseSettingsList <a name="DmsDataProviderSettingsSybaseAseSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get"></a>

```typescript
public get(index: number): DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsSybaseAseSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>[]

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataProvider } from '@cdktn/provider-aws'

new dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">resetEncryptPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetEncryptPassword` <a name="resetEncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```typescript
public resetEncryptPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">encryptPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">encryptPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `encryptPasswordInput`<sup>Optional</sup> <a name="encryptPasswordInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```typescript
public readonly encryptPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `encryptPassword`<sup>Required</sup> <a name="encryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```typescript
public readonly encryptPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataProviderSettingsSybaseAseSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---



