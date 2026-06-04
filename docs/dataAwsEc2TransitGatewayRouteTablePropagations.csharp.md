# `dataAwsEc2TransitGatewayRouteTablePropagations` Submodule <a name="`dataAwsEc2TransitGatewayRouteTablePropagations` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagations <a name="DataAwsEc2TransitGatewayRouteTablePropagations" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagations(Construct Scope, string Id, DataAwsEc2TransitGatewayRouteTablePropagationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig">DataAwsEc2TransitGatewayRouteTablePropagationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig">DataAwsEc2TransitGatewayRouteTablePropagationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTablePropagations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTablePropagations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTablePropagations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTablePropagations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTablePropagations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTablePropagations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTablePropagations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayRouteTablePropagations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTablePropagations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablePropagationsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput"></a>

```csharp
public string TransitGatewayRouteTableIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsConfig <a name="DataAwsEc2TransitGatewayRouteTablePropagationsConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TransitGatewayRouteTableId,
    IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] Filter = null,
    string Id = null,
    string Region = null,
    DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#region DataAwsEc2TransitGatewayRouteTablePropagations#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

### DataAwsEc2TransitGatewayRouteTablePropagationsFilter <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}.

---

### DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsFilterList <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>[]

---


### DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>

---


### DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---



