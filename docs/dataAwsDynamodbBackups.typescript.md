# `dataAwsDynamodbBackups` Submodule <a name="`dataAwsDynamodbBackups` Submodule" id="@cdktn/provider-aws.dataAwsDynamodbBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbBackups <a name="DataAwsDynamodbBackups" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

new dataAwsDynamodbBackups.DataAwsDynamodbBackups(scope: Construct, id: string, config?: DataAwsDynamodbBackupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound">resetTimeRangeLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound">resetTimeRangeUpperBound</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackupType` <a name="resetBackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType"></a>

```typescript
public resetBackupType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTimeRangeLowerBound` <a name="resetTimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound"></a>

```typescript
public resetTimeRangeLowerBound(): void
```

##### `resetTimeRangeUpperBound` <a name="resetTimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound"></a>

```typescript
public resetTimeRangeUpperBound(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDynamodbBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDynamodbBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDynamodbBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries">backupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput">backupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput">timeRangeLowerBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput">timeRangeUpperBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound">timeRangeLowerBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound">timeRangeUpperBound</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backupSummaries`<sup>Required</sup> <a name="backupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries"></a>

```typescript
public readonly backupSummaries: DataAwsDynamodbBackupsBackupSummariesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a>

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput"></a>

```typescript
public readonly backupTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeRangeLowerBoundInput`<sup>Optional</sup> <a name="timeRangeLowerBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput"></a>

```typescript
public readonly timeRangeLowerBoundInput: string;
```

- *Type:* string

---

##### `timeRangeUpperBoundInput`<sup>Optional</sup> <a name="timeRangeUpperBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput"></a>

```typescript
public readonly timeRangeUpperBoundInput: string;
```

- *Type:* string

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `timeRangeLowerBound`<sup>Required</sup> <a name="timeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound"></a>

```typescript
public readonly timeRangeLowerBound: string;
```

- *Type:* string

---

##### `timeRangeUpperBound`<sup>Required</sup> <a name="timeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound"></a>

```typescript
public readonly timeRangeUpperBound: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbBackupsBackupSummaries <a name="DataAwsDynamodbBackupsBackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries.Initializer"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

const dataAwsDynamodbBackupsBackupSummaries: dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries = { ... }
```


### DataAwsDynamodbBackupsConfig <a name="DataAwsDynamodbBackupsConfig" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.Initializer"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

const dataAwsDynamodbBackupsConfig: dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType">backupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound">timeRangeLowerBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound">timeRangeUpperBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}.

---

##### `timeRangeLowerBound`<sup>Optional</sup> <a name="timeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound"></a>

```typescript
public readonly timeRangeLowerBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}.

---

##### `timeRangeUpperBound`<sup>Optional</sup> <a name="timeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound"></a>

```typescript
public readonly timeRangeUpperBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbBackupsBackupSummariesList <a name="DataAwsDynamodbBackupsBackupSummariesList" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

new dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbBackupsBackupSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbBackupsBackupSummariesOutputReference <a name="DataAwsDynamodbBackupsBackupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbBackups } from '@cdktn/provider-aws'

new dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn">backupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime">backupCreationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime">backupExpiryDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName">backupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes">backupSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus">backupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupArn`<sup>Required</sup> <a name="backupArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn"></a>

```typescript
public readonly backupArn: string;
```

- *Type:* string

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="backupCreationDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime"></a>

```typescript
public readonly backupCreationDateTime: string;
```

- *Type:* string

---

##### `backupExpiryDateTime`<sup>Required</sup> <a name="backupExpiryDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime"></a>

```typescript
public readonly backupExpiryDateTime: string;
```

- *Type:* string

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

---

##### `backupSizeBytes`<sup>Required</sup> <a name="backupSizeBytes" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes"></a>

```typescript
public readonly backupSizeBytes: number;
```

- *Type:* number

---

##### `backupStatus`<sup>Required</sup> <a name="backupStatus" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus"></a>

```typescript
public readonly backupStatus: string;
```

- *Type:* string

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbBackupsBackupSummaries;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a>

---



