# `dataAwsBackupReportPlan` Submodule <a name="`dataAwsBackupReportPlan` Submodule" id="@cdktn/provider-aws.dataAwsBackupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBackupReportPlan <a name="DataAwsBackupReportPlan" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlan(Construct Scope, string Id, DataAwsBackupReportPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig">DataAwsBackupReportPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig">DataAwsBackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsBackupReportPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBackupReportPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBackupReportPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBackupReportPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBackupReportPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsBackupReportPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBackupReportPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBackupReportPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsBackupReportPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel">ReportDeliveryChannel</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting">ReportSetting</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ReportDeliveryChannel`<sup>Required</sup> <a name="ReportDeliveryChannel" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel"></a>

```csharp
public DataAwsBackupReportPlanReportDeliveryChannelList ReportDeliveryChannel { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a>

---

##### `ReportSetting`<sup>Required</sup> <a name="ReportSetting" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting"></a>

```csharp
public DataAwsBackupReportPlanReportSettingList ReportSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBackupReportPlanConfig <a name="DataAwsBackupReportPlanConfig" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#name DataAwsBackupReportPlan#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#id DataAwsBackupReportPlan#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#tags DataAwsBackupReportPlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#name DataAwsBackupReportPlan#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#id DataAwsBackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#region DataAwsBackupReportPlan#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/backup_report_plan#tags DataAwsBackupReportPlan#tags}.

---

### DataAwsBackupReportPlanReportDeliveryChannel <a name="DataAwsBackupReportPlanReportDeliveryChannel" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportDeliveryChannel {

};
```


### DataAwsBackupReportPlanReportSetting <a name="DataAwsBackupReportPlanReportSetting" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportSetting {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBackupReportPlanReportDeliveryChannelList <a name="DataAwsBackupReportPlanReportDeliveryChannelList" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportDeliveryChannelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get"></a>

```csharp
private DataAwsBackupReportPlanReportDeliveryChannelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBackupReportPlanReportDeliveryChannelOutputReference <a name="DataAwsBackupReportPlanReportDeliveryChannelOutputReference" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportDeliveryChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats">Formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Formats`<sup>Required</sup> <a name="Formats" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```csharp
public string[] Formats { get; }
```

- *Type:* string[]

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```csharp
public DataAwsBackupReportPlanReportDeliveryChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a>

---


### DataAwsBackupReportPlanReportSettingList <a name="DataAwsBackupReportPlanReportSettingList" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get"></a>

```csharp
private DataAwsBackupReportPlanReportSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBackupReportPlanReportSettingOutputReference <a name="DataAwsBackupReportPlanReportSettingOutputReference" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBackupReportPlanReportSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns">FrameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">NumberOfFrameworks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.organizationUnits">OrganizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate">ReportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `FrameworkArns`<sup>Required</sup> <a name="FrameworkArns" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```csharp
public string[] FrameworkArns { get; }
```

- *Type:* string[]

---

##### `NumberOfFrameworks`<sup>Required</sup> <a name="NumberOfFrameworks" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```csharp
public double NumberOfFrameworks { get; }
```

- *Type:* double

---

##### `OrganizationUnits`<sup>Required</sup> <a name="OrganizationUnits" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.organizationUnits"></a>

```csharp
public string[] OrganizationUnits { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `ReportTemplate`<sup>Required</sup> <a name="ReportTemplate" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```csharp
public string ReportTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```csharp
public DataAwsBackupReportPlanReportSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a>

---



