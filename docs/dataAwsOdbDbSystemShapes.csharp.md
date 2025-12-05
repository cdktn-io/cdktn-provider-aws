# `dataAwsOdbDbSystemShapes` Submodule <a name="`dataAwsOdbDbSystemShapes` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbSystemShapes <a name="DataAwsOdbDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes aws_odb_db_system_shapes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbSystemShapes(Construct Scope, string Id, DataAwsOdbDbSystemShapesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbSystemShapes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbSystemShapes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbSystemShapes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbSystemShapes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbDbSystemShapes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes">DbSystemShapes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbSystemShapes`<sup>Required</sup> <a name="DbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes"></a>

```csharp
public DataAwsOdbDbSystemShapesDbSystemShapesList DbSystemShapes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a>

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbSystemShapesConfig <a name="DataAwsOdbDbSystemShapesConfig" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbSystemShapesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZoneId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | The physical ID of the AZ, for example, use1-az4. This ID persists across accounts. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

The physical ID of the AZ, for example, use1-az4. This ID persists across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#availability_zone_id DataAwsOdbDbSystemShapes#availability_zone_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#region DataAwsOdbDbSystemShapes#region}

---

### DataAwsOdbDbSystemShapesDbSystemShapes <a name="DataAwsOdbDbSystemShapesDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbSystemShapesDbSystemShapes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbSystemShapesDbSystemShapesList <a name="DataAwsOdbDbSystemShapesDbSystemShapesList" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbSystemShapesDbSystemShapesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get"></a>

```csharp
private DataAwsOdbDbSystemShapesDbSystemShapesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbDbSystemShapesDbSystemShapesOutputReference <a name="DataAwsOdbDbSystemShapesDbSystemShapesOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbSystemShapesDbSystemShapesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">AvailableCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">AvailableCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">AvailableDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">AvailableDataStoragePerServerInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">AvailableDbNodePerNodeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">AvailableDbNodeStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">AvailableMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">AvailableMemoryPerNodeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">CoreCountIncrement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">MaximumNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount">MaxStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode">MinCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs">MinDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs">MinDbNodeStoragePerNodeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">MinimumCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">MinimumNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs">MinMemoryPerNodeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount">MinStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount">RuntimeMinimumCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">ShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType">ShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableCoreCount`<sup>Required</sup> <a name="AvailableCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```csharp
public double AvailableCoreCount { get; }
```

- *Type:* double

---

##### `AvailableCoreCountPerNode`<sup>Required</sup> <a name="AvailableCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```csharp
public double AvailableCoreCountPerNode { get; }
```

- *Type:* double

---

##### `AvailableDataStorageInTbs`<sup>Required</sup> <a name="AvailableDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```csharp
public double AvailableDataStorageInTbs { get; }
```

- *Type:* double

---

##### `AvailableDataStoragePerServerInTbs`<sup>Required</sup> <a name="AvailableDataStoragePerServerInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```csharp
public double AvailableDataStoragePerServerInTbs { get; }
```

- *Type:* double

---

##### `AvailableDbNodePerNodeInGbs`<sup>Required</sup> <a name="AvailableDbNodePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```csharp
public double AvailableDbNodePerNodeInGbs { get; }
```

- *Type:* double

---

##### `AvailableDbNodeStorageInGbs`<sup>Required</sup> <a name="AvailableDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```csharp
public double AvailableDbNodeStorageInGbs { get; }
```

- *Type:* double

---

##### `AvailableMemoryInGbs`<sup>Required</sup> <a name="AvailableMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```csharp
public double AvailableMemoryInGbs { get; }
```

- *Type:* double

---

##### `AvailableMemoryPerNodeInGbs`<sup>Required</sup> <a name="AvailableMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```csharp
public double AvailableMemoryPerNodeInGbs { get; }
```

- *Type:* double

---

##### `CoreCountIncrement`<sup>Required</sup> <a name="CoreCountIncrement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```csharp
public double CoreCountIncrement { get; }
```

- *Type:* double

---

##### `MaximumNodeCount`<sup>Required</sup> <a name="MaximumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```csharp
public double MaximumNodeCount { get; }
```

- *Type:* double

---

##### `MaxStorageCount`<sup>Required</sup> <a name="MaxStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount"></a>

```csharp
public double MaxStorageCount { get; }
```

- *Type:* double

---

##### `MinCoreCountPerNode`<sup>Required</sup> <a name="MinCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode"></a>

```csharp
public double MinCoreCountPerNode { get; }
```

- *Type:* double

---

##### `MinDataStorageInTbs`<sup>Required</sup> <a name="MinDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs"></a>

```csharp
public double MinDataStorageInTbs { get; }
```

- *Type:* double

---

##### `MinDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="MinDbNodeStoragePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs"></a>

```csharp
public double MinDbNodeStoragePerNodeInGbs { get; }
```

- *Type:* double

---

##### `MinimumCoreCount`<sup>Required</sup> <a name="MinimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```csharp
public double MinimumCoreCount { get; }
```

- *Type:* double

---

##### `MinimumNodeCount`<sup>Required</sup> <a name="MinimumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```csharp
public double MinimumNodeCount { get; }
```

- *Type:* double

---

##### `MinMemoryPerNodeInGbs`<sup>Required</sup> <a name="MinMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs"></a>

```csharp
public double MinMemoryPerNodeInGbs { get; }
```

- *Type:* double

---

##### `MinStorageCount`<sup>Required</sup> <a name="MinStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount"></a>

```csharp
public double MinStorageCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeMinimumCoreCount`<sup>Required</sup> <a name="RuntimeMinimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount"></a>

```csharp
public double RuntimeMinimumCoreCount { get; }
```

- *Type:* double

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```csharp
public string ShapeFamily { get; }
```

- *Type:* string

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType"></a>

```csharp
public string ShapeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbDbSystemShapesDbSystemShapes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a>

---



