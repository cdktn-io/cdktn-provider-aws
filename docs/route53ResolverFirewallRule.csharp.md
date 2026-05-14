# `route53ResolverFirewallRule` Submodule <a name="`route53ResolverFirewallRule` Submodule" id="@cdktn/provider-aws.route53ResolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRule <a name="Route53ResolverFirewallRule" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53ResolverFirewallRule(Construct Scope, string Id, Route53ResolverFirewallRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig">Route53ResolverFirewallRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig">Route53ResolverFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType">ResetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain">ResetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl">ResetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse">ResetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetDnsThreatProtection">ResetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainListId">ResetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainRedirectionAction">ResetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetQType">ResetQType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBlockOverrideDnsType` <a name="ResetBlockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType"></a>

```csharp
private void ResetBlockOverrideDnsType()
```

##### `ResetBlockOverrideDomain` <a name="ResetBlockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain"></a>

```csharp
private void ResetBlockOverrideDomain()
```

##### `ResetBlockOverrideTtl` <a name="ResetBlockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl"></a>

```csharp
private void ResetBlockOverrideTtl()
```

##### `ResetBlockResponse` <a name="ResetBlockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse"></a>

```csharp
private void ResetBlockResponse()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetConfidenceThreshold"></a>

```csharp
private void ResetConfidenceThreshold()
```

##### `ResetDnsThreatProtection` <a name="ResetDnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetDnsThreatProtection"></a>

```csharp
private void ResetDnsThreatProtection()
```

##### `ResetFirewallDomainListId` <a name="ResetFirewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainListId"></a>

```csharp
private void ResetFirewallDomainListId()
```

##### `ResetFirewallDomainRedirectionAction` <a name="ResetFirewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainRedirectionAction"></a>

```csharp
private void ResetFirewallDomainRedirectionAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQType` <a name="ResetQType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetQType"></a>

```csharp
private void ResetQType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53ResolverFirewallRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53ResolverFirewallRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53ResolverFirewallRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53ResolverFirewallRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53ResolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallThreatProtectionId">FirewallThreatProtectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput">BlockOverrideDnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput">BlockOverrideDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput">BlockOverrideTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput">BlockResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtectionInput">DnsThreatProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput">FirewallDomainListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionActionInput">FirewallDomainRedirectionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput">FirewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qTypeInput">QTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse">BlockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qType">QType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallThreatProtectionId`<sup>Required</sup> <a name="FirewallThreatProtectionId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallThreatProtectionId"></a>

```csharp
public string FirewallThreatProtectionId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `BlockOverrideDnsTypeInput`<sup>Optional</sup> <a name="BlockOverrideDnsTypeInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```csharp
public string BlockOverrideDnsTypeInput { get; }
```

- *Type:* string

---

##### `BlockOverrideDomainInput`<sup>Optional</sup> <a name="BlockOverrideDomainInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput"></a>

```csharp
public string BlockOverrideDomainInput { get; }
```

- *Type:* string

---

##### `BlockOverrideTtlInput`<sup>Optional</sup> <a name="BlockOverrideTtlInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput"></a>

```csharp
public double BlockOverrideTtlInput { get; }
```

- *Type:* double

---

##### `BlockResponseInput`<sup>Optional</sup> <a name="BlockResponseInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput"></a>

```csharp
public string BlockResponseInput { get; }
```

- *Type:* string

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThresholdInput"></a>

```csharp
public string ConfidenceThresholdInput { get; }
```

- *Type:* string

---

##### `DnsThreatProtectionInput`<sup>Optional</sup> <a name="DnsThreatProtectionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtectionInput"></a>

```csharp
public string DnsThreatProtectionInput { get; }
```

- *Type:* string

---

##### `FirewallDomainListIdInput`<sup>Optional</sup> <a name="FirewallDomainListIdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput"></a>

```csharp
public string FirewallDomainListIdInput { get; }
```

- *Type:* string

---

##### `FirewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="FirewallDomainRedirectionActionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionActionInput"></a>

```csharp
public string FirewallDomainRedirectionActionInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupIdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput"></a>

```csharp
public string FirewallRuleGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QTypeInput`<sup>Optional</sup> <a name="QTypeInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qTypeInput"></a>

```csharp
public string QTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType"></a>

```csharp
public string BlockOverrideDnsType { get; }
```

- *Type:* string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain"></a>

```csharp
public string BlockOverrideDomain { get; }
```

- *Type:* string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl"></a>

```csharp
public double BlockOverrideTtl { get; }
```

- *Type:* double

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse"></a>

```csharp
public string BlockResponse { get; }
```

- *Type:* string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; }
```

- *Type:* string

---

##### `DnsThreatProtection`<sup>Required</sup> <a name="DnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtection"></a>

```csharp
public string DnsThreatProtection { get; }
```

- *Type:* string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; }
```

- *Type:* string

---

##### `FirewallDomainRedirectionAction`<sup>Required</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionAction"></a>

```csharp
public string FirewallDomainRedirectionAction { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `QType`<sup>Required</sup> <a name="QType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qType"></a>

```csharp
public string QType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleConfig <a name="Route53ResolverFirewallRuleConfig" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53ResolverFirewallRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Action,
    string FirewallRuleGroupId,
    string Name,
    double Priority,
    string BlockOverrideDnsType = null,
    string BlockOverrideDomain = null,
    double BlockOverrideTtl = null,
    string BlockResponse = null,
    string ConfidenceThreshold = null,
    string DnsThreatProtection = null,
    string FirewallDomainListId = null,
    string FirewallDomainRedirectionAction = null,
    string Id = null,
    string QType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse">BlockResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.qType">QType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `BlockOverrideDnsType`<sup>Optional</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```csharp
public string BlockOverrideDnsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `BlockOverrideDomain`<sup>Optional</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```csharp
public string BlockOverrideDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `BlockOverrideTtl`<sup>Optional</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```csharp
public double BlockOverrideTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `BlockResponse`<sup>Optional</sup> <a name="BlockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse"></a>

```csharp
public string BlockResponse { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}.

---

##### `DnsThreatProtection`<sup>Optional</sup> <a name="DnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dnsThreatProtection"></a>

```csharp
public string DnsThreatProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}.

---

##### `FirewallDomainListId`<sup>Optional</sup> <a name="FirewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `FirewallDomainRedirectionAction`<sup>Optional</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainRedirectionAction"></a>

```csharp
public string FirewallDomainRedirectionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QType`<sup>Optional</sup> <a name="QType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.qType"></a>

```csharp
public string QType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53_resolver_firewall_rule#region Route53ResolverFirewallRule#region}

---



