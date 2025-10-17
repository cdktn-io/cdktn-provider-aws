# `dataAwsOdbNetworkPeeringConnections` Submodule <a name="`dataAwsOdbNetworkPeeringConnections` Submodule" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbNetworkPeeringConnections <a name="DataAwsOdbNetworkPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/odb_network_peering_connections aws_odb_network_peering_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbNetworkPeeringConnections(Construct Scope, string Id, DataAwsOdbNetworkPeeringConnectionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig">DataAwsOdbNetworkPeeringConnectionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig">DataAwsOdbNetworkPeeringConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections">PutOdbPeeringConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections">ResetOdbPeeringConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOdbPeeringConnections` <a name="PutOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections"></a>

```csharp
private void PutOdbPeeringConnections(IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]

---

##### `ResetOdbPeeringConnections` <a name="ResetOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections"></a>

```csharp
private void ResetOdbPeeringConnections()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbNetworkPeeringConnections.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbNetworkPeeringConnections.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbNetworkPeeringConnections.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbNetworkPeeringConnections.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbNetworkPeeringConnections to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbNetworkPeeringConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/odb_network_peering_connections#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbNetworkPeeringConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections">OdbPeeringConnections</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput">OdbPeeringConnectionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `OdbPeeringConnections`<sup>Required</sup> <a name="OdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections"></a>

```csharp
public DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList OdbPeeringConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a>

---

##### `OdbPeeringConnectionsInput`<sup>Optional</sup> <a name="OdbPeeringConnectionsInput" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput"></a>

```csharp
public IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] OdbPeeringConnectionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbNetworkPeeringConnectionsConfig <a name="DataAwsOdbNetworkPeeringConnectionsConfig" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbNetworkPeeringConnectionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] OdbPeeringConnections = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections">OdbPeeringConnections</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]</code> | odb_peering_connections block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `OdbPeeringConnections`<sup>Optional</sup> <a name="OdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections"></a>

```csharp
public IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] OdbPeeringConnections { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]

odb_peering_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/odb_network_peering_connections#odb_peering_connections DataAwsOdbNetworkPeeringConnections#odb_peering_connections}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/odb_network_peering_connections#region DataAwsOdbNetworkPeeringConnections#region}

---

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get"></a>

```csharp
private DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>[]

---


### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections</a>

---



