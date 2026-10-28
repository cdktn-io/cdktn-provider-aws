# `dataAwsOdbAutonomousDatabase` Submodule <a name="`dataAwsOdbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbAutonomousDatabase <a name="DataAwsOdbAutonomousDatabase" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase(scope: Construct, id: string, config: DataAwsOdbAutonomousDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actualUsedDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource">adminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs">allocatedStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails">dbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress">percentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations">scheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```typescript
public readonly actualUsedDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `adminPasswordSource`<sup>Required</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource"></a>

```typescript
public readonly adminPasswordSource: DataAwsOdbAutonomousDatabaseAdminPasswordSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `allocatedStorageSizeInTbs`<sup>Required</sup> <a name="allocatedStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```typescript
public readonly allocatedStorageSizeInTbs: number;
```

- *Type:* number

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autonomousMaintenanceScheduleType`<sup>Required</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```typescript
public readonly autonomousMaintenanceScheduleType: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `byolComputeCountLimit`<sup>Required</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```typescript
public readonly byolComputeCountLimit: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customerContactsToSendToOci`<sup>Required</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```typescript
public readonly customerContactsToSendToOci: DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbToolsDetails`<sup>Required</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails"></a>

```typescript
public readonly dbToolsDetails: DataAwsOdbAutonomousDatabaseDbToolsDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `encryptionKeyProvider`<sup>Required</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```typescript
public readonly encryptionKeyProvider: string;
```

- *Type:* string

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isAutoScalingForStorageEnabled`<sup>Required</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```typescript
public readonly isAutoScalingForStorageEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isBackupRetentionLocked`<sup>Required</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```typescript
public readonly isBackupRetentionLocked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isMtlsConnectionRequired`<sup>Required</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```typescript
public readonly isMtlsConnectionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress"></a>

```typescript
public readonly percentProgress: number;
```

- *Type:* number

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `resourcePoolLeaderId`<sup>Required</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```typescript
public readonly resourcePoolLeaderId: string;
```

- *Type:* string

---

##### `resourcePoolSummary`<sup>Required</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary"></a>

```typescript
public readonly resourcePoolSummary: DataAwsOdbAutonomousDatabaseResourcePoolSummaryList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: DataAwsOdbAutonomousDatabaseScheduledOperationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```typescript
public readonly serviceConsoleUrl: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `standbyAllowlistedIps`<sup>Required</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```typescript
public readonly standbyAllowlistedIps: string[];
```

- *Type:* string[]

---

##### `standbyAllowlistedIpsSource`<sup>Required</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```typescript
public readonly standbyAllowlistedIpsSource: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSource <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseAdminPasswordSource: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource = { ... }
```


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret = { ... }
```


### DataAwsOdbAutonomousDatabaseConfig <a name="DataAwsOdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseConfig: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id">id</a></code> | <code>string</code> | Unique identifier of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#id DataAwsOdbAutonomousDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#region DataAwsOdbAutonomousDatabase#region}

---

### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci = { ... }
```


### DataAwsOdbAutonomousDatabaseDbToolsDetails <a name="DataAwsOdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseDbToolsDetails: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails = { ... }
```


### DataAwsOdbAutonomousDatabaseLongTermBackupSchedule <a name="DataAwsOdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseLongTermBackupSchedule: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule = { ... }
```


### DataAwsOdbAutonomousDatabaseResourcePoolSummary <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseResourcePoolSummary: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary = { ... }
```


### DataAwsOdbAutonomousDatabaseScheduledOperations <a name="DataAwsOdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

const dataAwsOdbAutonomousDatabaseScheduledOperations: dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">externalIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdType`<sup>Required</sup> <a name="externalIdType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```typescript
public readonly externalIdType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">customerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedAwsSecret`<sup>Required</sup> <a name="customerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```typescript
public readonly customerManagedAwsSecret: DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseAdminPasswordSource;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a>

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsList <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxIdleTimeInMinutes`<sup>Required</sup> <a name="maxIdleTimeInMinutes" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```typescript
public readonly maxIdleTimeInMinutes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseDbToolsDetails;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a>

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">isDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseLongTermBackupSchedule;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryList <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">availableComputeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">availableStorageCapacityInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">isDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">poolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">poolStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">totalComputeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableComputeCapacity`<sup>Required</sup> <a name="availableComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```typescript
public readonly availableComputeCapacity: number;
```

- *Type:* number

---

##### `availableStorageCapacityInTbs`<sup>Required</sup> <a name="availableStorageCapacityInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```typescript
public readonly availableStorageCapacityInTbs: number;
```

- *Type:* number

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

---

##### `poolStorageSizeInTbs`<sup>Required</sup> <a name="poolStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```typescript
public readonly poolStorageSizeInTbs: number;
```

- *Type:* number

---

##### `totalComputeCapacity`<sup>Required</sup> <a name="totalComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```typescript
public readonly totalComputeCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseResourcePoolSummary;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a>

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsList <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get"></a>

```typescript
public get(index: number): DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbAutonomousDatabase } from '@cdktn/provider-aws'

new dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

---

##### `scheduledStopTime`<sup>Required</sup> <a name="scheduledStopTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```typescript
public readonly scheduledStopTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbAutonomousDatabaseScheduledOperations;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a>

---



