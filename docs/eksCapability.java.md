# `eksCapability` Submodule <a name="`eksCapability` Submodule" id="@cdktf/provider-aws.eksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCapability <a name="EksCapability" id="@cdktf/provider-aws.eksCapability.EksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability aws_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapability;

EksCapability.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilityName(java.lang.String)
    .clusterName(java.lang.String)
    .deletePropagationPolicy(java.lang.String)
    .roleArn(java.lang.String)
    .type(java.lang.String)
//  .configuration(IResolvable|java.util.List<EksCapabilityConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EksCapabilityTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.capabilityName">capabilityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy">deletePropagationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.capabilityName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}.

---

##### `deletePropagationPolicy`<sup>Required</sup> <a name="deletePropagationPolicy" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.deletePropagationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.configuration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#region EksCapability#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapability.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.eksCapability.EksCapability.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.eksCapability.EksCapability.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.eksCapability.EksCapability.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.eksCapability.EksCapability.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.eksCapability.EksCapability.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapability.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.eksCapability.EksCapability.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapability.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<EksCapabilityConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts"></a>

```java
public void putTimeouts(EksCapabilityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapability.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.eksCapability.EksCapability.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.eksCapability.EksCapability.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.eksCapability.EksCapability.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapability;

EksCapability.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCapability.EksCapability.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapability;

EksCapability.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapability;

EksCapability.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapability;

EksCapability.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EksCapability.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EksCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityNameInput">capabilityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput">deletePropagationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityName">capabilityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy">deletePropagationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksCapability.EksCapability.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.eksCapability.EksCapability.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksCapability.EksCapability.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksCapability.EksCapability.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksCapability.EksCapability.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksCapability.EksCapability.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCapability.EksCapability.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksCapability.EksCapability.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.eksCapability.EksCapability.property.configuration"></a>

```java
public EksCapabilityConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.property.timeouts"></a>

```java
public EksCapabilityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksCapability.EksCapability.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `capabilityNameInput`<sup>Optional</sup> <a name="capabilityNameInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityNameInput"></a>

```java
public java.lang.String getCapabilityNameInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.configurationInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfiguration> getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>>

---

##### `deletePropagationPolicyInput`<sup>Optional</sup> <a name="deletePropagationPolicyInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput"></a>

```java
public java.lang.String getDeletePropagationPolicyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.timeoutsInput"></a>

```java
public IResolvable|EksCapabilityTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityName"></a>

```java
public java.lang.String getCapabilityName();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksCapability.EksCapability.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `deletePropagationPolicy`<sup>Required</sup> <a name="deletePropagationPolicy" id="@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy"></a>

```java
public java.lang.String getDeletePropagationPolicy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.eksCapability.EksCapability.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksCapability.EksCapability.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EksCapabilityConfig <a name="EksCapabilityConfig" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfig;

EksCapabilityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilityName(java.lang.String)
    .clusterName(java.lang.String)
    .deletePropagationPolicy(java.lang.String)
    .roleArn(java.lang.String)
    .type(java.lang.String)
//  .configuration(IResolvable|java.util.List<EksCapabilityConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EksCapabilityTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName">capabilityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy">deletePropagationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName"></a>

```java
public java.lang.String getCapabilityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}.

---

##### `deletePropagationPolicy`<sup>Required</sup> <a name="deletePropagationPolicy" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy"></a>

```java
public java.lang.String getDeletePropagationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfiguration> getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#region EksCapability#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts"></a>

```java
public EksCapabilityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}

---

### EksCapabilityConfiguration <a name="EksCapabilityConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfiguration;

EksCapabilityConfiguration.builder()
//  .argoCd(IResolvable|java.util.List<EksCapabilityConfigurationArgoCd>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd">argoCd</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>></code> | argo_cd block. |

---

##### `argoCd`<sup>Optional</sup> <a name="argoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCd> getArgoCd();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>>

argo_cd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

### EksCapabilityConfigurationArgoCd <a name="EksCapabilityConfigurationArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCd;

EksCapabilityConfigurationArgoCd.builder()
//  .awsIdc(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdAwsIdc>)
//  .namespace(java.lang.String)
//  .networkAccess(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdNetworkAccess>)
//  .rbacRoleMapping(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc">awsIdc</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>></code> | aws_idc block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#namespace EksCapability#namespace}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess">networkAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>></code> | network_access block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping">rbacRoleMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>></code> | rbac_role_mapping block. |

---

##### `awsIdc`<sup>Optional</sup> <a name="awsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdAwsIdc> getAwsIdc();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>>

aws_idc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#namespace EksCapability#namespace}.

---

##### `networkAccess`<sup>Optional</sup> <a name="networkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdNetworkAccess> getNetworkAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>>

network_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

##### `rbacRoleMapping`<sup>Optional</sup> <a name="rbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMapping> getRbacRoleMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>>

rbac_role_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#rbac_role_mapping EksCapability#rbac_role_mapping}

---

### EksCapabilityConfigurationArgoCdAwsIdc <a name="EksCapabilityConfigurationArgoCdAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdAwsIdc;

EksCapabilityConfigurationArgoCdAwsIdc.builder()
    .idcInstanceArn(java.lang.String)
//  .idcRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion">idcRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}. |

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}.

---

##### `idcRegion`<sup>Optional</sup> <a name="idcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion"></a>

```java
public java.lang.String getIdcRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}.

---

### EksCapabilityConfigurationArgoCdNetworkAccess <a name="EksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdNetworkAccess;

EksCapabilityConfigurationArgoCdNetworkAccess.builder()
//  .vpceIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}. |

---

##### `vpceIds`<sup>Optional</sup> <a name="vpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}.

---

### EksCapabilityConfigurationArgoCdRbacRoleMapping <a name="EksCapabilityConfigurationArgoCdRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMapping;

EksCapabilityConfigurationArgoCdRbacRoleMapping.builder()
    .role(java.lang.String)
//  .identity(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role EksCapability#role}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity">identity</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>></code> | identity block. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role EksCapability#role}.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity> getIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#identity EksCapability#identity}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity;

EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.builder()
    .id(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#id EksCapability#id}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#id EksCapability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}.

---

### EksCapabilityTimeouts <a name="EksCapabilityTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityTimeouts;

EksCapabilityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#create EksCapability#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete EksCapability#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#update EksCapability#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EksCapabilityConfigurationArgoCdAwsIdcList <a name="EksCapabilityConfigurationArgoCdAwsIdcList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdAwsIdcList;

new EksCapabilityConfigurationArgoCdAwsIdcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get"></a>

```java
public EksCapabilityConfigurationArgoCdAwsIdcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdAwsIdc> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>>

---


### EksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="EksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference;

new EksCapabilityConfigurationArgoCdAwsIdcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion">resetIdcRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdcRegion` <a name="resetIdcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion"></a>

```java
public void resetIdcRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput">idcRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">idcRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```java
public java.lang.String getIdcManagedApplicationArn();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `idcRegionInput`<sup>Optional</sup> <a name="idcRegionInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput"></a>

```java
public java.lang.String getIdcRegionInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `idcRegion`<sup>Required</sup> <a name="idcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```java
public java.lang.String getIdcRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfigurationArgoCdAwsIdc getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---


### EksCapabilityConfigurationArgoCdList <a name="EksCapabilityConfigurationArgoCdList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdList;

new EksCapabilityConfigurationArgoCdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get"></a>

```java
public EksCapabilityConfigurationArgoCdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCd> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>>

---


### EksCapabilityConfigurationArgoCdNetworkAccessList <a name="EksCapabilityConfigurationArgoCdNetworkAccessList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdNetworkAccessList;

new EksCapabilityConfigurationArgoCdNetworkAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get"></a>

```java
public EksCapabilityConfigurationArgoCdNetworkAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdNetworkAccess> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>>

---


### EksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="EksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference;

new EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds">resetVpceIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpceIds` <a name="resetVpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds"></a>

```java
public void resetVpceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput">vpceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpceIdsInput`<sup>Optional</sup> <a name="vpceIdsInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### EksCapabilityConfigurationArgoCdOutputReference <a name="EksCapabilityConfigurationArgoCdOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdOutputReference;

new EksCapabilityConfigurationArgoCdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc">putAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess">putNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping">putRbacRoleMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc">resetAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess">resetNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping">resetRbacRoleMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsIdc` <a name="putAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc"></a>

```java
public void putAwsIdc(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdAwsIdc> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>>

---

##### `putNetworkAccess` <a name="putNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess"></a>

```java
public void putNetworkAccess(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdNetworkAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>>

---

##### `putRbacRoleMapping` <a name="putRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping"></a>

```java
public void putRbacRoleMapping(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>>

---

##### `resetAwsIdc` <a name="resetAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc"></a>

```java
public void resetAwsIdc()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNetworkAccess` <a name="resetNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess"></a>

```java
public void resetNetworkAccess()
```

##### `resetRbacRoleMapping` <a name="resetRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping"></a>

```java
public void resetRbacRoleMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">awsIdc</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">networkAccess</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping">rbacRoleMapping</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput">awsIdcInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput">networkAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput">rbacRoleMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIdc`<sup>Required</sup> <a name="awsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```java
public EksCapabilityConfigurationArgoCdAwsIdcList getAwsIdc();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a>

---

##### `networkAccess`<sup>Required</sup> <a name="networkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```java
public EksCapabilityConfigurationArgoCdNetworkAccessList getNetworkAccess();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a>

---

##### `rbacRoleMapping`<sup>Required</sup> <a name="rbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping"></a>

```java
public EksCapabilityConfigurationArgoCdRbacRoleMappingList getRbacRoleMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a>

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `awsIdcInput`<sup>Optional</sup> <a name="awsIdcInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdAwsIdc> getAwsIdcInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `networkAccessInput`<sup>Optional</sup> <a name="networkAccessInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdNetworkAccess> getNetworkAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>>

---

##### `rbacRoleMappingInput`<sup>Optional</sup> <a name="rbacRoleMappingInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMapping> getRbacRoleMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfigurationArgoCd getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList;

new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get"></a>

```java
public EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference;

new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMappingList;

new EksCapabilityConfigurationArgoCdRbacRoleMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get"></a>

```java
public EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMapping> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference;

new EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity"></a>

```java
public void putIdentity(IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>>

---

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity"></a>

```java
public void resetIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput">identityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity"></a>

```java
public EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity> getIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>

---


### EksCapabilityConfigurationList <a name="EksCapabilityConfigurationList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationList;

new EksCapabilityConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get"></a>

```java
public EksCapabilityConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>>

---


### EksCapabilityConfigurationOutputReference <a name="EksCapabilityConfigurationOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityConfigurationOutputReference;

new EksCapabilityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd">putArgoCd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd">resetArgoCd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArgoCd` <a name="putArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd"></a>

```java
public void putArgoCd(IResolvable|java.util.List<EksCapabilityConfigurationArgoCd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>>

---

##### `resetArgoCd` <a name="resetArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd"></a>

```java
public void resetArgoCd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd">argoCd</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput">argoCdInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argoCd`<sup>Required</sup> <a name="argoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd"></a>

```java
public EksCapabilityConfigurationArgoCdList getArgoCd();
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a>

---

##### `argoCdInput`<sup>Optional</sup> <a name="argoCdInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput"></a>

```java
public IResolvable|java.util.List<EksCapabilityConfigurationArgoCd> getArgoCdInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---


### EksCapabilityTimeoutsOutputReference <a name="EksCapabilityTimeoutsOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_capability.EksCapabilityTimeoutsOutputReference;

new EksCapabilityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EksCapabilityTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---



