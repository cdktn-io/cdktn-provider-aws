# `ec2TrafficMirrorTarget` Submodule <a name="`ec2TrafficMirrorTarget` Submodule" id="@cdktn/provider-aws.ec2TrafficMirrorTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorTarget <a name="Ec2TrafficMirrorTarget" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target aws_ec2_traffic_mirror_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTarget;

Ec2TrafficMirrorTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .gatewayLoadBalancerEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .networkLoadBalancerArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}.

---

##### `gatewayLoadBalancerEndpointId`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.gatewayLoadBalancerEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}.

---

##### `networkLoadBalancerArn`<sup>Optional</sup> <a name="networkLoadBalancerArn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.networkLoadBalancerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#region Ec2TrafficMirrorTarget#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId">resetGatewayLoadBalancerEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn">resetNetworkLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGatewayLoadBalancerEndpointId` <a name="resetGatewayLoadBalancerEndpointId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId"></a>

```java
public void resetGatewayLoadBalancerEndpointId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetNetworkLoadBalancerArn` <a name="resetNetworkLoadBalancerArn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn"></a>

```java
public void resetNetworkLoadBalancerArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTarget;

Ec2TrafficMirrorTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTarget;

Ec2TrafficMirrorTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTarget;

Ec2TrafficMirrorTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTarget;

Ec2TrafficMirrorTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TrafficMirrorTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TrafficMirrorTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TrafficMirrorTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TrafficMirrorTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput">gatewayLoadBalancerEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput">networkLoadBalancerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayLoadBalancerEndpointIdInput`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointIdInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput"></a>

```java
public java.lang.String getGatewayLoadBalancerEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerArnInput`<sup>Optional</sup> <a name="networkLoadBalancerArnInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput"></a>

```java
public java.lang.String getNetworkLoadBalancerArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayLoadBalancerEndpointId`<sup>Required</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId"></a>

```java
public java.lang.String getGatewayLoadBalancerEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerArn`<sup>Required</sup> <a name="networkLoadBalancerArn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn"></a>

```java
public java.lang.String getNetworkLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorTargetConfig <a name="Ec2TrafficMirrorTargetConfig" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_traffic_mirror_target.Ec2TrafficMirrorTargetConfig;

Ec2TrafficMirrorTargetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .gatewayLoadBalancerEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .networkLoadBalancerArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}.

---

##### `gatewayLoadBalancerEndpointId`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId"></a>

```java
public java.lang.String getGatewayLoadBalancerEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}.

---

##### `networkLoadBalancerArn`<sup>Optional</sup> <a name="networkLoadBalancerArn" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn"></a>

```java
public java.lang.String getNetworkLoadBalancerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#region Ec2TrafficMirrorTarget#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}.

---



