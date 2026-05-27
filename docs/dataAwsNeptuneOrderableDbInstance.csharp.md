# `dataAwsNeptuneOrderableDbInstance` Submodule <a name="`dataAwsNeptuneOrderableDbInstance` Submodule" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneOrderableDbInstance <a name="DataAwsNeptuneOrderableDbInstance" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance aws_neptune_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsNeptuneOrderableDbInstance(Construct Scope, string Id, DataAwsNeptuneOrderableDbInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses">ResetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetPreferredInstanceClasses` <a name="ResetPreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses"></a>

```csharp
private void ResetPreferredInstanceClasses()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsNeptuneOrderableDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsNeptuneOrderableDbInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNeptuneOrderableDbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNeptuneOrderableDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsNeptuneOrderableDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance">MaxIopsPerDbInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib">MaxIopsPerGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize">MaxStorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance">MinIopsPerDbInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib">MinIopsPerGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize">MinStorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable">MultiAzCapable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable">ReadReplicaCapable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring">SupportsEnhancedMonitoring</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication">SupportsIamDatabaseAuthentication</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops">SupportsIops</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights">SupportsPerformanceInsights</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption">SupportsStorageEncryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput">PreferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput">VpcInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc">Vpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `MaxIopsPerDbInstance`<sup>Required</sup> <a name="MaxIopsPerDbInstance" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```csharp
public double MaxIopsPerDbInstance { get; }
```

- *Type:* double

---

##### `MaxIopsPerGib`<sup>Required</sup> <a name="MaxIopsPerGib" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib"></a>

```csharp
public double MaxIopsPerGib { get; }
```

- *Type:* double

---

##### `MaxStorageSize`<sup>Required</sup> <a name="MaxStorageSize" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize"></a>

```csharp
public double MaxStorageSize { get; }
```

- *Type:* double

---

##### `MinIopsPerDbInstance`<sup>Required</sup> <a name="MinIopsPerDbInstance" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance"></a>

```csharp
public double MinIopsPerDbInstance { get; }
```

- *Type:* double

---

##### `MinIopsPerGib`<sup>Required</sup> <a name="MinIopsPerGib" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib"></a>

```csharp
public double MinIopsPerGib { get; }
```

- *Type:* double

---

##### `MinStorageSize`<sup>Required</sup> <a name="MinStorageSize" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize"></a>

```csharp
public double MinStorageSize { get; }
```

- *Type:* double

---

##### `MultiAzCapable`<sup>Required</sup> <a name="MultiAzCapable" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable"></a>

```csharp
public IResolvable MultiAzCapable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReadReplicaCapable`<sup>Required</sup> <a name="ReadReplicaCapable" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable"></a>

```csharp
public IResolvable ReadReplicaCapable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SupportsEnhancedMonitoring`<sup>Required</sup> <a name="SupportsEnhancedMonitoring" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```csharp
public IResolvable SupportsEnhancedMonitoring { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsIamDatabaseAuthentication`<sup>Required</sup> <a name="SupportsIamDatabaseAuthentication" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```csharp
public IResolvable SupportsIamDatabaseAuthentication { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsIops`<sup>Required</sup> <a name="SupportsIops" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops"></a>

```csharp
public IResolvable SupportsIops { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsPerformanceInsights`<sup>Required</sup> <a name="SupportsPerformanceInsights" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights"></a>

```csharp
public IResolvable SupportsPerformanceInsights { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsStorageEncryption`<sup>Required</sup> <a name="SupportsStorageEncryption" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption"></a>

```csharp
public IResolvable SupportsStorageEncryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `PreferredInstanceClassesInput`<sup>Optional</sup> <a name="PreferredInstanceClassesInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```csharp
public string[] PreferredInstanceClassesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput"></a>

```csharp
public bool|IResolvable VpcInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `PreferredInstanceClasses`<sup>Required</sup> <a name="PreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc"></a>

```csharp
public bool|IResolvable Vpc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneOrderableDbInstanceConfig <a name="DataAwsNeptuneOrderableDbInstanceConfig" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsNeptuneOrderableDbInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Engine = null,
    string EngineVersion = null,
    string Id = null,
    string InstanceClass = null,
    string LicenseModel = null,
    string[] PreferredInstanceClasses = null,
    string Region = null,
    bool|IResolvable Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc">Vpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}.

---

##### `PreferredInstanceClasses`<sup>Optional</sup> <a name="PreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#region DataAwsNeptuneOrderableDbInstance#region}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc"></a>

```csharp
public bool|IResolvable Vpc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}.

---



