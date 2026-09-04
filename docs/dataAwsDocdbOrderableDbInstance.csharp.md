# `dataAwsDocdbOrderableDbInstance` Submodule <a name="`dataAwsDocdbOrderableDbInstance` Submodule" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbOrderableDbInstance <a name="DataAwsDocdbOrderableDbInstance" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance aws_docdb_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDocdbOrderableDbInstance(Construct Scope, string Id, DataAwsDocdbOrderableDbInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses">ResetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetPreferredInstanceClasses` <a name="ResetPreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses"></a>

```csharp
private void ResetPreferredInstanceClasses()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDocdbOrderableDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbOrderableDbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsDocdbOrderableDbInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDocdbOrderableDbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDocdbOrderableDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDocdbOrderableDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput">PreferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput">VpcInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc">Vpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `PreferredInstanceClassesInput`<sup>Optional</sup> <a name="PreferredInstanceClassesInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```csharp
public string[] PreferredInstanceClassesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput"></a>

```csharp
public bool|IResolvable VpcInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `PreferredInstanceClasses`<sup>Required</sup> <a name="PreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc"></a>

```csharp
public bool|IResolvable Vpc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbOrderableDbInstanceConfig <a name="DataAwsDocdbOrderableDbInstanceConfig" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDocdbOrderableDbInstanceConfig {
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
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc">Vpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `PreferredInstanceClasses`<sup>Optional</sup> <a name="PreferredInstanceClasses" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#region DataAwsDocdbOrderableDbInstance#region}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc"></a>

```csharp
public bool|IResolvable Vpc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---



