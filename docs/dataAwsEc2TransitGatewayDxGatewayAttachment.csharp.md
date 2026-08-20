# `dataAwsEc2TransitGatewayDxGatewayAttachment` Submodule <a name="`dataAwsEc2TransitGatewayDxGatewayAttachment` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachment <a name="DataAwsEc2TransitGatewayDxGatewayAttachment" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment aws_ec2_transit_gateway_dx_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachment(Construct Scope, string Id, DataAwsEc2TransitGatewayDxGatewayAttachmentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig">DataAwsEc2TransitGatewayDxGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig">DataAwsEc2TransitGatewayDxGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetDxGatewayId">ResetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

---

##### `ResetDxGatewayId` <a name="ResetDxGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetDxGatewayId"></a>

```csharp
private void ResetDxGatewayId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayDxGatewayAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayDxGatewayAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayDxGatewayAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayDxGatewayAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2TransitGatewayDxGatewayAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayDxGatewayAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayDxGatewayAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayDxGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayDxGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList">DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList">DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference</a>

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachmentConfig <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DxGatewayId = null,
    IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] Filter = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts Timeouts = null,
    string TransitGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DxGatewayId`<sup>Optional</sup> <a name="DxGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#region DataAwsEc2TransitGatewayDxGatewayAttachment#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#timeouts DataAwsEc2TransitGatewayDxGatewayAttachment#timeouts}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}.

---

### DataAwsEc2TransitGatewayDxGatewayAttachmentFilter <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}.

---

### DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#read DataAwsEc2TransitGatewayDxGatewayAttachment#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#read DataAwsEc2TransitGatewayDxGatewayAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>[]

---


### DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>

---


### DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

---



