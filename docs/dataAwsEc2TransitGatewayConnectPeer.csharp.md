# `dataAwsEc2TransitGatewayConnectPeer` Submodule <a name="`dataAwsEc2TransitGatewayConnectPeer` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayConnectPeer <a name="DataAwsEc2TransitGatewayConnectPeer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeer(Construct Scope, string Id, DataAwsEc2TransitGatewayConnectPeerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig">DataAwsEc2TransitGatewayConnectPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig">DataAwsEc2TransitGatewayConnectPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTransitGatewayConnectPeerId">ResetTransitGatewayConnectPeerId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayConnectPeerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayConnectPeerId` <a name="ResetTransitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTransitGatewayConnectPeerId"></a>

```csharp
private void ResetTransitGatewayConnectPeerId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayConnectPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayConnectPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayConnectPeer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayConnectPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayConnectPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpAsn">BgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpPeerAddress">BgpPeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpTransitGatewayAddresses">BgpTransitGatewayAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList">DataAwsEc2TransitGatewayConnectPeerFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAddress">TransitGatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerIdInput">TransitGatewayConnectPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId">TransitGatewayConnectPeerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpAsn"></a>

```csharp
public string BgpAsn { get; }
```

- *Type:* string

---

##### `BgpPeerAddress`<sup>Required</sup> <a name="BgpPeerAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpPeerAddress"></a>

```csharp
public string BgpPeerAddress { get; }
```

- *Type:* string

---

##### `BgpTransitGatewayAddresses`<sup>Required</sup> <a name="BgpTransitGatewayAddresses" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpTransitGatewayAddresses"></a>

```csharp
public string[] BgpTransitGatewayAddresses { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayConnectPeerFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList">DataAwsEc2TransitGatewayConnectPeerFilterList</a>

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.insideCidrBlocks"></a>

```csharp
public string[] InsideCidrBlocks { get; }
```

- *Type:* string[]

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference</a>

---

##### `TransitGatewayAddress`<sup>Required</sup> <a name="TransitGatewayAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAddress"></a>

```csharp
public string TransitGatewayAddress { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---

##### `TransitGatewayConnectPeerIdInput`<sup>Optional</sup> <a name="TransitGatewayConnectPeerIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerIdInput"></a>

```csharp
public string TransitGatewayConnectPeerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayConnectPeerId`<sup>Required</sup> <a name="TransitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId"></a>

```csharp
public string TransitGatewayConnectPeerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConnectPeerConfig <a name="DataAwsEc2TransitGatewayConnectPeerConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter[] Filter = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2TransitGatewayConnectPeerTimeouts Timeouts = null,
    string TransitGatewayConnectPeerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.transitGatewayConnectPeerId">TransitGatewayConnectPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#filter DataAwsEc2TransitGatewayConnectPeer#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#region DataAwsEc2TransitGatewayConnectPeer#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayConnectPeerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#timeouts DataAwsEc2TransitGatewayConnectPeer#timeouts}

---

##### `TransitGatewayConnectPeerId`<sup>Optional</sup> <a name="TransitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.transitGatewayConnectPeerId"></a>

```csharp
public string TransitGatewayConnectPeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}.

---

### DataAwsEc2TransitGatewayConnectPeerFilter <a name="DataAwsEc2TransitGatewayConnectPeerFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}.

---

### DataAwsEc2TransitGatewayConnectPeerTimeouts <a name="DataAwsEc2TransitGatewayConnectPeerTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#read DataAwsEc2TransitGatewayConnectPeer#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_transit_gateway_connect_peer#read DataAwsEc2TransitGatewayConnectPeer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayConnectPeerFilterList <a name="DataAwsEc2TransitGatewayConnectPeerFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayConnectPeerFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>[]

---


### DataAwsEc2TransitGatewayConnectPeerFilterOutputReference <a name="DataAwsEc2TransitGatewayConnectPeerFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>

---


### DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayConnectPeerTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---



