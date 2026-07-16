# `dataAwsRoute` Submodule <a name="`dataAwsRoute` Submodule" id="@cdktn/provider-aws.dataAwsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute <a name="DataAwsRoute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route aws_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute(Construct Scope, string Id, DataAwsRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig">DataAwsRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig">DataAwsRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId">ResetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn">ResetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock">ResetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock">ResetDestinationIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId">ResetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId">ResetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetOdbNetworkArn">ResetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId">ResetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

---

##### `ResetCarrierGatewayId` <a name="ResetCarrierGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId"></a>

```csharp
private void ResetCarrierGatewayId()
```

##### `ResetCoreNetworkArn` <a name="ResetCoreNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn"></a>

```csharp
private void ResetCoreNetworkArn()
```

##### `ResetDestinationCidrBlock` <a name="ResetDestinationCidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock"></a>

```csharp
private void ResetDestinationCidrBlock()
```

##### `ResetDestinationIpv6CidrBlock` <a name="ResetDestinationIpv6CidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock"></a>

```csharp
private void ResetDestinationIpv6CidrBlock()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId"></a>

```csharp
private void ResetDestinationPrefixListId()
```

##### `ResetEgressOnlyGatewayId` <a name="ResetEgressOnlyGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId"></a>

```csharp
private void ResetEgressOnlyGatewayId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId"></a>

```csharp
private void ResetGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId"></a>

```csharp
private void ResetLocalGatewayId()
```

##### `ResetNatGatewayId` <a name="ResetNatGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId"></a>

```csharp
private void ResetNatGatewayId()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetOdbNetworkArn` <a name="ResetOdbNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetOdbNetworkArn"></a>

```csharp
private void ResetOdbNetworkArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetVpcPeeringConnectionId` <a name="ResetVpcPeeringConnectionId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId"></a>

```csharp
private void ResetVpcPeeringConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput">CarrierGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput">DestinationIpv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput">EgressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput">NatGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.odbNetworkArnInput">OdbNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId">RouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts"></a>

```csharp
public DataAwsRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a>

---

##### `CarrierGatewayIdInput`<sup>Optional</sup> <a name="CarrierGatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput"></a>

```csharp
public string CarrierGatewayIdInput { get; }
```

- *Type:* string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput"></a>

```csharp
public string CoreNetworkArnInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput"></a>

```csharp
public string DestinationCidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationIpv6CidrBlockInput`<sup>Optional</sup> <a name="DestinationIpv6CidrBlockInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput"></a>

```csharp
public string DestinationIpv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput"></a>

```csharp
public string DestinationPrefixListIdInput { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayIdInput`<sup>Optional</sup> <a name="EgressOnlyGatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput"></a>

```csharp
public string EgressOnlyGatewayIdInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput"></a>

```csharp
public string LocalGatewayIdInput { get; }
```

- *Type:* string

---

##### `NatGatewayIdInput`<sup>Optional</sup> <a name="NatGatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput"></a>

```csharp
public string NatGatewayIdInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `OdbNetworkArnInput`<sup>Optional</sup> <a name="OdbNetworkArnInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.odbNetworkArnInput"></a>

```csharp
public string OdbNetworkArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput"></a>

```csharp
public string RouteTableIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsRouteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput"></a>

```csharp
public string VpcPeeringConnectionIdInput { get; }
```

- *Type:* string

---

##### `CarrierGatewayId`<sup>Required</sup> <a name="CarrierGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId"></a>

```csharp
public string CarrierGatewayId { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `DestinationIpv6CidrBlock`<sup>Required</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock"></a>

```csharp
public string DestinationIpv6CidrBlock { get; }
```

- *Type:* string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayId`<sup>Required</sup> <a name="EgressOnlyGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `NatGatewayId`<sup>Required</sup> <a name="NatGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId"></a>

```csharp
public string RouteTableId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRouteConfig <a name="DataAwsRouteConfig" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RouteTableId,
    string CarrierGatewayId = null,
    string CoreNetworkArn = null,
    string DestinationCidrBlock = null,
    string DestinationIpv6CidrBlock = null,
    string DestinationPrefixListId = null,
    string EgressOnlyGatewayId = null,
    string GatewayId = null,
    string Id = null,
    string InstanceId = null,
    string LocalGatewayId = null,
    string NatGatewayId = null,
    string NetworkInterfaceId = null,
    string OdbNetworkArn = null,
    string Region = null,
    DataAwsRouteTimeouts Timeouts = null,
    string TransitGatewayId = null,
    string VpcPeeringConnectionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId">RouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#route_table_id DataAwsRoute#route_table_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#core_network_arn DataAwsRoute#core_network_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_cidr_block DataAwsRoute#destination_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#gateway_id DataAwsRoute#gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#id DataAwsRoute#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#instance_id DataAwsRoute#instance_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#local_gateway_id DataAwsRoute#local_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#nat_gateway_id DataAwsRoute#nat_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#network_interface_id DataAwsRoute#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#odb_network_arn DataAwsRoute#odb_network_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#transit_gateway_id DataAwsRoute#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId"></a>

```csharp
public string RouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#route_table_id DataAwsRoute#route_table_id}.

---

##### `CarrierGatewayId`<sup>Optional</sup> <a name="CarrierGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId"></a>

```csharp
public string CarrierGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}.

---

##### `CoreNetworkArn`<sup>Optional</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#core_network_arn DataAwsRoute#core_network_arn}.

---

##### `DestinationCidrBlock`<sup>Optional</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_cidr_block DataAwsRoute#destination_cidr_block}.

---

##### `DestinationIpv6CidrBlock`<sup>Optional</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock"></a>

```csharp
public string DestinationIpv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}.

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}.

---

##### `EgressOnlyGatewayId`<sup>Optional</sup> <a name="EgressOnlyGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#gateway_id DataAwsRoute#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#id DataAwsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#instance_id DataAwsRoute#instance_id}.

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#local_gateway_id DataAwsRoute#local_gateway_id}.

---

##### `NatGatewayId`<sup>Optional</sup> <a name="NatGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#nat_gateway_id DataAwsRoute#nat_gateway_id}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#network_interface_id DataAwsRoute#network_interface_id}.

---

##### `OdbNetworkArn`<sup>Optional</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#odb_network_arn DataAwsRoute#odb_network_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#region DataAwsRoute#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts"></a>

```csharp
public DataAwsRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#timeouts DataAwsRoute#timeouts}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#transit_gateway_id DataAwsRoute#transit_gateway_id}.

---

##### `VpcPeeringConnectionId`<sup>Optional</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}.

---

### DataAwsRouteTimeouts <a name="DataAwsRouteTimeouts" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRouteTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#read DataAwsRoute#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route#read DataAwsRoute#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRouteTimeoutsOutputReference <a name="DataAwsRouteTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsRouteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

---



