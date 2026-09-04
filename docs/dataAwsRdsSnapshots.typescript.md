# `dataAwsRdsSnapshots` Submodule <a name="`dataAwsRdsSnapshots` Submodule" id="@cdktn/provider-aws.dataAwsRdsSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsSnapshots <a name="DataAwsRdsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots aws_rds_snapshots}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshots(scope: Construct, id: string, config?: DataAwsRdsSnapshotsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig">DataAwsRdsSnapshotsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig">DataAwsRdsSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier">resetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic">resetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared">resetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType">resetSnapshotType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsRdsSnapshotsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]

---

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier"></a>

```typescript
public resetDbInstanceIdentifier(): void
```

##### `resetDbSnapshotIdentifier` <a name="resetDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier"></a>

```typescript
public resetDbSnapshotIdentifier(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetIncludePublic` <a name="resetIncludePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic"></a>

```typescript
public resetIncludePublic(): void
```

##### `resetIncludeShared` <a name="resetIncludeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared"></a>

```typescript
public resetIncludeShared(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSnapshotType` <a name="resetSnapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType"></a>

```typescript
public resetSnapshotType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots">snapshots</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput">dbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput">includePublicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput">includeSharedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput">snapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic">includePublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared">includeShared</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter"></a>

```typescript
public readonly filter: DataAwsRdsSnapshotsFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a>

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots"></a>

```typescript
public readonly snapshots: DataAwsRdsSnapshotsSnapshotsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a>

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `dbSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbSnapshotIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput"></a>

```typescript
public readonly dbSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsRdsSnapshotsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]

---

##### `includePublicInput`<sup>Optional</sup> <a name="includePublicInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput"></a>

```typescript
public readonly includePublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSharedInput`<sup>Optional</sup> <a name="includeSharedInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput"></a>

```typescript
public readonly includeSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `snapshotTypeInput`<sup>Optional</sup> <a name="snapshotTypeInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput"></a>

```typescript
public readonly snapshotTypeInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `includePublic`<sup>Required</sup> <a name="includePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic"></a>

```typescript
public readonly includePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeShared`<sup>Required</sup> <a name="includeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared"></a>

```typescript
public readonly includeShared: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsSnapshotsConfig <a name="DataAwsRdsSnapshotsConfig" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

const dataAwsRdsSnapshotsConfig: dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic">includePublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared">includeShared</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType">snapshotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}.

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsRdsSnapshotsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#filter DataAwsRdsSnapshots#filter}

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic"></a>

```typescript
public readonly includePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared"></a>

```typescript
public readonly includeShared: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#region DataAwsRdsSnapshots#region}

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}.

---

### DataAwsRdsSnapshotsFilter <a name="DataAwsRdsSnapshotsFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

const dataAwsRdsSnapshotsFilter: dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}.

---

### DataAwsRdsSnapshotsSnapshots <a name="DataAwsRdsSnapshotsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

const dataAwsRdsSnapshotsSnapshots: dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots = { ... }
```


### DataAwsRdsSnapshotsSnapshotsTagListStruct <a name="DataAwsRdsSnapshotsSnapshotsTagListStruct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

const dataAwsRdsSnapshotsSnapshotsTagListStruct: dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsSnapshotsFilterList <a name="DataAwsRdsSnapshotsFilterList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get"></a>

```typescript
public get(index: number): DataAwsRdsSnapshotsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRdsSnapshotsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>[]

---


### DataAwsRdsSnapshotsFilterOutputReference <a name="DataAwsRdsSnapshotsFilterOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRdsSnapshotsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>

---


### DataAwsRdsSnapshotsSnapshotsList <a name="DataAwsRdsSnapshotsSnapshotsList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get"></a>

```typescript
public get(index: number): DataAwsRdsSnapshotsSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRdsSnapshotsSnapshotsOutputReference <a name="DataAwsRdsSnapshotsSnapshotsOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn">dbSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime">originalSnapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime">snapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier">sourceDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList">tagList</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `dbSnapshotArn`<sup>Required</sup> <a name="dbSnapshotArn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn"></a>

```typescript
public readonly dbSnapshotArn: string;
```

- *Type:* string

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

---

##### `originalSnapshotCreateTime`<sup>Required</sup> <a name="originalSnapshotCreateTime" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime"></a>

```typescript
public readonly originalSnapshotCreateTime: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="snapshotCreateTime" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime"></a>

```typescript
public readonly snapshotCreateTime: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `sourceDbSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier"></a>

```typescript
public readonly sourceDbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList"></a>

```typescript
public readonly tagList: DataAwsRdsSnapshotsSnapshotsTagListStructList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRdsSnapshotsSnapshots;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a>

---


### DataAwsRdsSnapshotsSnapshotsTagListStructList <a name="DataAwsRdsSnapshotsSnapshotsTagListStructList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get"></a>

```typescript
public get(index: number): DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference <a name="DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsSnapshots } from '@cdktn/provider-aws'

new dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRdsSnapshotsSnapshotsTagListStruct;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a>

---



