# `dataAwsEc2LocalGatewayRouteTable` Submodule <a name="`dataAwsEc2LocalGatewayRouteTable` Submodule" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayRouteTable <a name="DataAwsEc2LocalGatewayRouteTable" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table aws_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTable(Construct Scope, string Id, DataAwsEc2LocalGatewayRouteTableConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId">ResetLocalGatewayRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2LocalGatewayRouteTableFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2LocalGatewayRouteTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId"></a>

```csharp
private void ResetLocalGatewayId()
```

##### `ResetLocalGatewayRouteTableId` <a name="ResetLocalGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId"></a>

```csharp
private void ResetLocalGatewayRouteTableId()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn"></a>

```csharp
private void ResetOutpostArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayRouteTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayRouteTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayRouteTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayRouteTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2LocalGatewayRouteTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2LocalGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2LocalGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput">LocalGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput">OutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter"></a>

```csharp
public DataAwsEc2LocalGatewayRouteTableFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```csharp
public string LocalGatewayIdInput { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableIdInput`<sup>Optional</sup> <a name="LocalGatewayRouteTableIdInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput"></a>

```csharp
public string LocalGatewayRouteTableIdInput { get; }
```

- *Type:* string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput"></a>

```csharp
public string OutpostArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```csharp
public string LocalGatewayRouteTableId { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayRouteTableConfig <a name="DataAwsEc2LocalGatewayRouteTableConfig" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2LocalGatewayRouteTableFilter[] Filter = null,
    string Id = null,
    string LocalGatewayId = null,
    string LocalGatewayRouteTableId = null,
    string OutpostArn = null,
    string Region = null,
    string State = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2LocalGatewayRouteTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn">OutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#filter DataAwsEc2LocalGatewayRouteTable#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.

---

##### `LocalGatewayRouteTableId`<sup>Optional</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId"></a>

```csharp
public string LocalGatewayRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn"></a>

```csharp
public string OutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#region DataAwsEc2LocalGatewayRouteTable#region}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayRouteTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#timeouts DataAwsEc2LocalGatewayRouteTable#timeouts}

---

### DataAwsEc2LocalGatewayRouteTableFilter <a name="DataAwsEc2LocalGatewayRouteTableFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}.

---

### DataAwsEc2LocalGatewayRouteTableTimeouts <a name="DataAwsEc2LocalGatewayRouteTableTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayRouteTableFilterList <a name="DataAwsEc2LocalGatewayRouteTableFilterList" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get"></a>

```csharp
private DataAwsEc2LocalGatewayRouteTableFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---


### DataAwsEc2LocalGatewayRouteTableFilterOutputReference <a name="DataAwsEc2LocalGatewayRouteTableFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>

---


### DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayRouteTableTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

---



