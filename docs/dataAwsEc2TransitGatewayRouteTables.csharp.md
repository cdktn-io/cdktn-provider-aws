# `dataAwsEc2TransitGatewayRouteTables` Submodule <a name="`dataAwsEc2TransitGatewayRouteTables` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTables <a name="DataAwsEc2TransitGatewayRouteTables" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables aws_ec2_transit_gateway_route_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTables(Construct Scope, string Id, DataAwsEc2TransitGatewayRouteTablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig">DataAwsEc2TransitGatewayRouteTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig">DataAwsEc2TransitGatewayRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayRouteTablesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTables resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayRouteTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTables resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList">DataAwsEc2TransitGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList">DataAwsEc2TransitGatewayRouteTablesFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTablesConfig <a name="DataAwsEc2TransitGatewayRouteTablesConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter[] Filter = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2TransitGatewayRouteTablesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#id DataAwsEc2TransitGatewayRouteTables#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#tags DataAwsEc2TransitGatewayRouteTables#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#filter DataAwsEc2TransitGatewayRouteTables#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#id DataAwsEc2TransitGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#region DataAwsEc2TransitGatewayRouteTables#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#tags DataAwsEc2TransitGatewayRouteTables#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayRouteTablesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#timeouts DataAwsEc2TransitGatewayRouteTables#timeouts}

---

### DataAwsEc2TransitGatewayRouteTablesFilter <a name="DataAwsEc2TransitGatewayRouteTablesFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#name DataAwsEc2TransitGatewayRouteTables#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#values DataAwsEc2TransitGatewayRouteTables#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#name DataAwsEc2TransitGatewayRouteTables#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#values DataAwsEc2TransitGatewayRouteTables#values}.

---

### DataAwsEc2TransitGatewayRouteTablesTimeouts <a name="DataAwsEc2TransitGatewayRouteTablesTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#read DataAwsEc2TransitGatewayRouteTables#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ec2_transit_gateway_route_tables#read DataAwsEc2TransitGatewayRouteTables#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTablesFilterList <a name="DataAwsEc2TransitGatewayRouteTablesFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayRouteTablesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>[]

---


### DataAwsEc2TransitGatewayRouteTablesFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTablesFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesFilter">DataAwsEc2TransitGatewayRouteTablesFilter</a>

---


### DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayRouteTablesTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTables.DataAwsEc2TransitGatewayRouteTablesTimeouts">DataAwsEc2TransitGatewayRouteTablesTimeouts</a>

---



