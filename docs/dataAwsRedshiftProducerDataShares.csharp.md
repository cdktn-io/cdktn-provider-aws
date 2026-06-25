# `dataAwsRedshiftProducerDataShares` Submodule <a name="`dataAwsRedshiftProducerDataShares` Submodule" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftProducerDataShares <a name="DataAwsRedshiftProducerDataShares" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftProducerDataShares(Construct Scope, string Id, DataAwsRedshiftProducerDataSharesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig">DataAwsRedshiftProducerDataSharesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig">DataAwsRedshiftProducerDataSharesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftProducerDataShares.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftProducerDataShares.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftProducerDataShares.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftProducerDataShares.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRedshiftProducerDataShares that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares">DataShares</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput">ProducerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn">ProducerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataShares`<sup>Required</sup> <a name="DataShares" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares"></a>

```csharp
public DataAwsRedshiftProducerDataSharesDataSharesList DataShares { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProducerArnInput`<sup>Optional</sup> <a name="ProducerArnInput" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput"></a>

```csharp
public string ProducerArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ProducerArn`<sup>Required</sup> <a name="ProducerArn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn"></a>

```csharp
public string ProducerArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftProducerDataSharesConfig <a name="DataAwsRedshiftProducerDataSharesConfig" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftProducerDataSharesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProducerArn,
    string Region = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn">ProducerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProducerArn`<sup>Required</sup> <a name="ProducerArn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn"></a>

```csharp
public string ProducerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#region DataAwsRedshiftProducerDataShares#region}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

### DataAwsRedshiftProducerDataSharesDataShares <a name="DataAwsRedshiftProducerDataSharesDataShares" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftProducerDataSharesDataShares {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftProducerDataSharesDataSharesList <a name="DataAwsRedshiftProducerDataSharesDataSharesList" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftProducerDataSharesDataSharesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get"></a>

```csharp
private DataAwsRedshiftProducerDataSharesDataSharesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRedshiftProducerDataSharesDataSharesOutputReference <a name="DataAwsRedshiftProducerDataSharesDataSharesOutputReference" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftProducerDataSharesDataSharesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn">DataShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy">ManagedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn">ProducerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataShareArn`<sup>Required</sup> <a name="DataShareArn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn"></a>

```csharp
public string DataShareArn { get; }
```

- *Type:* string

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy"></a>

```csharp
public string ManagedBy { get; }
```

- *Type:* string

---

##### `ProducerArn`<sup>Required</sup> <a name="ProducerArn" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn"></a>

```csharp
public string ProducerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue"></a>

```csharp
public DataAwsRedshiftProducerDataSharesDataShares InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>

---



