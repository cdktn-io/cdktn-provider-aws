# `vpcSecurityGroupRulesExclusive` Submodule <a name="`vpcSecurityGroupRulesExclusive` Submodule" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupRulesExclusive <a name="VpcSecurityGroupRulesExclusive" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive aws_vpc_security_group_rules_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusive;

VpcSecurityGroupRulesExclusive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .egressRuleIds(java.util.List<java.lang.String>)
    .ingressRuleIds(java.util.List<java.lang.String>)
    .securityGroupId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.egressRuleIds">egressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.ingressRuleIds">ingressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressRuleIds`<sup>Required</sup> <a name="egressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.egressRuleIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}.

---

##### `ingressRuleIds`<sup>Required</sup> <a name="ingressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.ingressRuleIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#region VpcSecurityGroupRulesExclusive#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusive;

VpcSecurityGroupRulesExclusive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusive;

VpcSecurityGroupRulesExclusive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusive;

VpcSecurityGroupRulesExclusive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusive;

VpcSecurityGroupRulesExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcSecurityGroupRulesExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcSecurityGroupRulesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcSecurityGroupRulesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupRulesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput">egressRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput">ingressRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds">egressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds">ingressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressRuleIdsInput`<sup>Optional</sup> <a name="egressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getEgressRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressRuleIdsInput`<sup>Optional</sup> <a name="ingressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getIngressRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `egressRuleIds`<sup>Required</sup> <a name="egressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds"></a>

```java
public java.util.List<java.lang.String> getEgressRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressRuleIds`<sup>Required</sup> <a name="ingressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds"></a>

```java
public java.util.List<java.lang.String> getIngressRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupRulesExclusiveConfig <a name="VpcSecurityGroupRulesExclusiveConfig" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.vpc_security_group_rules_exclusive.VpcSecurityGroupRulesExclusiveConfig;

VpcSecurityGroupRulesExclusiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .egressRuleIds(java.util.List<java.lang.String>)
    .ingressRuleIds(java.util.List<java.lang.String>)
    .securityGroupId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds">egressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds">ingressRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressRuleIds`<sup>Required</sup> <a name="egressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds"></a>

```java
public java.util.List<java.lang.String> getEgressRuleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}.

---

##### `ingressRuleIds`<sup>Required</sup> <a name="ingressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds"></a>

```java
public java.util.List<java.lang.String> getIngressRuleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/vpc_security_group_rules_exclusive#region VpcSecurityGroupRulesExclusive#region}

---



