# `dataAwsEc2TransitGatewayPeeringAttachments` Submodule <a name="`dataAwsEc2TransitGatewayPeeringAttachments` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayPeeringAttachments <a name="DataAwsEc2TransitGatewayPeeringAttachments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments aws_ec2_transit_gateway_peering_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachments(Construct Scope, string Id, DataAwsEc2TransitGatewayPeeringAttachmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig">DataAwsEc2TransitGatewayPeeringAttachmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig">DataAwsEc2TransitGatewayPeeringAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayPeeringAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayPeeringAttachments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayPeeringAttachments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayPeeringAttachments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayPeeringAttachments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayPeeringAttachments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayPeeringAttachments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayPeeringAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayPeeringAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList">DataAwsEc2TransitGatewayPeeringAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayPeeringAttachmentsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList">DataAwsEc2TransitGatewayPeeringAttachmentsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentsConfig <a name="DataAwsEc2TransitGatewayPeeringAttachmentsConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter[] Filter = null,
    string Id = null,
    string Region = null,
    DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#filter DataAwsEc2TransitGatewayPeeringAttachments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#region DataAwsEc2TransitGatewayPeeringAttachments#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#timeouts DataAwsEc2TransitGatewayPeeringAttachments#timeouts}

---

### DataAwsEc2TransitGatewayPeeringAttachmentsFilter <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#name DataAwsEc2TransitGatewayPeeringAttachments#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#values DataAwsEc2TransitGatewayPeeringAttachments#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#name DataAwsEc2TransitGatewayPeeringAttachments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#values DataAwsEc2TransitGatewayPeeringAttachments#values}.

---

### DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts <a name="DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#read DataAwsEc2TransitGatewayPeeringAttachments#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachments#read DataAwsEc2TransitGatewayPeeringAttachments#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentsFilterList <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>[]

---


### DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>

---


### DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

---



