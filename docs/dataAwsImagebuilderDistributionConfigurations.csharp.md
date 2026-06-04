# `dataAwsImagebuilderDistributionConfigurations` Submodule <a name="`dataAwsImagebuilderDistributionConfigurations` Submodule" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderDistributionConfigurations <a name="DataAwsImagebuilderDistributionConfigurations" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations aws_imagebuilder_distribution_configurations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsImagebuilderDistributionConfigurations(Construct Scope, string Id, DataAwsImagebuilderDistributionConfigurationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig">DataAwsImagebuilderDistributionConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig">DataAwsImagebuilderDistributionConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsImagebuilderDistributionConfigurations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsImagebuilderDistributionConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsImagebuilderDistributionConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsImagebuilderDistributionConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsImagebuilderDistributionConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsImagebuilderDistributionConfigurations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsImagebuilderDistributionConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsImagebuilderDistributionConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsImagebuilderDistributionConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns">Arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arns`<sup>Required</sup> <a name="Arns" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns"></a>

```csharp
public string[] Arns { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter"></a>

```csharp
public DataAwsImagebuilderDistributionConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a>

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput"></a>

```csharp
public IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderDistributionConfigurationsConfig <a name="DataAwsImagebuilderDistributionConfigurationsConfig" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsImagebuilderDistributionConfigurationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter[] Filter = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#filter DataAwsImagebuilderDistributionConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#region DataAwsImagebuilderDistributionConfigurations#region}

---

### DataAwsImagebuilderDistributionConfigurationsFilter <a name="DataAwsImagebuilderDistributionConfigurationsFilter" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsImagebuilderDistributionConfigurationsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderDistributionConfigurationsFilterList <a name="DataAwsImagebuilderDistributionConfigurationsFilterList" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsImagebuilderDistributionConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get"></a>

```csharp
private DataAwsImagebuilderDistributionConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>[]

---


### DataAwsImagebuilderDistributionConfigurationsFilterOutputReference <a name="DataAwsImagebuilderDistributionConfigurationsFilterOutputReference" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsImagebuilderDistributionConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsImagebuilderDistributionConfigurationsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>

---



