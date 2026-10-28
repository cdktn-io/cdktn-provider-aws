# `dataAwsOdbAutonomousDatabase` Submodule <a name="`dataAwsOdbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbAutonomousDatabase <a name="DataAwsOdbAutonomousDatabase" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabase(Construct Scope, string Id, DataAwsOdbAutonomousDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbAutonomousDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource">AdminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress">PercentProgress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```csharp
public double ActualUsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AdminPasswordSource`<sup>Required</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource"></a>

```csharp
public DataAwsOdbAutonomousDatabaseAdminPasswordSourceList AdminPasswordSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```csharp
public double AllocatedStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```csharp
public string AutonomousMaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```csharp
public double ByolComputeCountLimit { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```csharp
public DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList CustomerContactsToSendToOci { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails"></a>

```csharp
public DataAwsOdbAutonomousDatabaseDbToolsDetailsList DbToolsDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EncryptionKeyProvider`<sup>Required</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```csharp
public string EncryptionKeyProvider { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```csharp
public IResolvable IsAutoScalingForStorageEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsBackupRetentionLocked`<sup>Required</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```csharp
public IResolvable IsBackupRetentionLocked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```csharp
public IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```csharp
public IResolvable IsMtlsConnectionRequired { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```csharp
public DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress"></a>

```csharp
public double PercentProgress { get; }
```

- *Type:* double

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; }
```

- *Type:* string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary"></a>

```csharp
public DataAwsOdbAutonomousDatabaseResourcePoolSummaryList ResourcePoolSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations"></a>

```csharp
public DataAwsOdbAutonomousDatabaseScheduledOperationsList ScheduledOperations { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `StandbyAllowlistedIps`<sup>Required</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```csharp
public string[] StandbyAllowlistedIps { get; }
```

- *Type:* string[]

---

##### `StandbyAllowlistedIpsSource`<sup>Required</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```csharp
public string StandbyAllowlistedIpsSource { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSource <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSource {

};
```


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret {

};
```


### DataAwsOdbAutonomousDatabaseConfig <a name="DataAwsOdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Unique identifier of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Unique identifier of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#id DataAwsOdbAutonomousDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/data-sources/odb_autonomous_database#region DataAwsOdbAutonomousDatabase#region}

---

### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci {

};
```


### DataAwsOdbAutonomousDatabaseDbToolsDetails <a name="DataAwsOdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseDbToolsDetails {

};
```


### DataAwsOdbAutonomousDatabaseLongTermBackupSchedule <a name="DataAwsOdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseLongTermBackupSchedule {

};
```


### DataAwsOdbAutonomousDatabaseResourcePoolSummary <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseResourcePoolSummary {

};
```


### DataAwsOdbAutonomousDatabaseScheduledOperations <a name="DataAwsOdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseScheduledOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">ExternalIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```csharp
public string ExternalIdType { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedAwsSecret`<sup>Required</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```csharp
public DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList CustomerManagedAwsSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseAdminPasswordSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a>

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsList <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseDbToolsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```csharp
public double MaxIdleTimeInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseDbToolsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a>

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseLongTermBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryList <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseResourcePoolSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">AvailableComputeCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">AvailableStorageCapacityInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">TotalComputeCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableComputeCapacity`<sup>Required</sup> <a name="AvailableComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```csharp
public double AvailableComputeCapacity { get; }
```

- *Type:* double

---

##### `AvailableStorageCapacityInTbs`<sup>Required</sup> <a name="AvailableStorageCapacityInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```csharp
public double AvailableStorageCapacityInTbs { get; }
```

- *Type:* double

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `PoolStorageSizeInTbs`<sup>Required</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```csharp
public double PoolStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `TotalComputeCapacity`<sup>Required</sup> <a name="TotalComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```csharp
public double TotalComputeCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseResourcePoolSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a>

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsList <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseScheduledOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get"></a>

```csharp
private DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; }
```

- *Type:* string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```csharp
public string ScheduledStopTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbAutonomousDatabaseScheduledOperations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a>

---



