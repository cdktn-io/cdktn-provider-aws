# `dataAwsOutpostsOutpostInstanceTypes` Submodule <a name="`dataAwsOutpostsOutpostInstanceTypes` Submodule" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceTypes <a name="DataAwsOutpostsOutpostInstanceTypes" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types aws_outposts_outpost_instance_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOutpostsOutpostInstanceTypes(Construct Scope, string Id, DataAwsOutpostsOutpostInstanceTypesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig">DataAwsOutpostsOutpostInstanceTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig">DataAwsOutpostsOutpostInstanceTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOutpostsOutpostInstanceTypes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOutpostsOutpostInstanceTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOutpostsOutpostInstanceTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOutpostsOutpostInstanceTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOutpostsOutpostInstanceTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOutpostsOutpostInstanceTypes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOutpostsOutpostInstanceTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOutpostsOutpostInstanceTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOutpostsOutpostInstanceTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypesConfig <a name="DataAwsOutpostsOutpostInstanceTypesConfig" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOutpostsOutpostInstanceTypesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#arn DataAwsOutpostsOutpostInstanceTypes#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#id DataAwsOutpostsOutpostInstanceTypes#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#arn DataAwsOutpostsOutpostInstanceTypes#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#id DataAwsOutpostsOutpostInstanceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/outposts_outpost_instance_types#region DataAwsOutpostsOutpostInstanceTypes#region}

---



